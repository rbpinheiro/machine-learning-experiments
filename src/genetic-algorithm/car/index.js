import '../../lib/planck-with-testbed';
import GA from '../lib/geneticAlgorithm';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// planck code modified from official example
planck.testbed('Car', function(testbed) {

  testbed.speed = 1.3;
  testbed.hz = 50;

  var pl = planck, Vec2 = pl.Vec2;
  var world = new pl.World({
    gravity : Vec2(0, -10)
  });

  // wheel spring settings
  var HZ = 4.0;
  var ZETA = 0.7;
  var SPEED = 50.0;

  var ground = world.createBody();

  var groundFD = {
    density : 0.0,
    friction : 0.6
  };

  ground.createFixture(pl.Edge(Vec2(-20.0, 0.0), Vec2(20.0, 0.0)), groundFD);
  const groundLength = 50;
  const hs = [];
  for (let i = 0; i < groundLength; i++) {
    if (i % 3 === 0) {
      hs.push(random(-1.0, 3.0));
    } else if (i % 10 === 0) {
      hs.push(random(3.0, 3.5));
    } else {
      hs.push(random(-1.5, 2.0));
    }
  }
  var x = 20.0, y1 = 0.0, dx = 5.0;

  for (var i = 0; i < groundLength; ++i) {
    var y2 = hs[i];
    ground.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + dx, y2)), groundFD);
    y1 = y2;
    x += dx;
  }

  ground.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + dx, 30)), groundFD);


  let toDestroy = [];
  // Car
  const groupIndex = -10;
  function createCar(bodyShape) {
    const car = world.createDynamicBody(Vec2(0.0, 5.0));
    car.createFixture(pl.Polygon(bodyShape), {
      density: 1.0,
      filterGroupIndex: groupIndex,
    });
    toDestroy.push(car);

    var wheelFD = {};
    wheelFD.density = 1.0;
    wheelFD.friction = 0.9;
    wheelFD.filterGroupIndex = groupIndex;

    var wheelBack = world.createDynamicBody(Vec2(-1.5, 5.4));
    wheelBack.createFixture(pl.Circle(0.4), wheelFD);
    toDestroy.push(wheelBack);

    var wheelFront = world.createDynamicBody(Vec2(1.5, 5.4));
    wheelFront.createFixture(pl.Circle(0.4), wheelFD);
    toDestroy.push(wheelFront);

    var springBack = world.createJoint(pl.WheelJoint({
      motorSpeed : 0.0,
      maxMotorTorque : 20.0,
      enableMotor : true,
      frequencyHz : HZ,
      dampingRatio : ZETA
    }, car, wheelBack, wheelBack.getPosition(), Vec2(0.0, 1.0)));
    toDestroy.push(springBack);

    var springFront = world.createJoint(pl.WheelJoint({
      motorSpeed : 0.0,
      maxMotorTorque : 10.0,
      enableMotor : true,
      frequencyHz : HZ,
      dampingRatio : ZETA
    }, car, wheelFront, wheelFront.getPosition(), Vec2(0.0, 1.0)));
    toDestroy.push(springFront);

    springBack.setMotorSpeed(-SPEED);
    springBack.enableMotor(true);
    springFront.setMotorSpeed(-SPEED);
    springFront.enableMotor(true);

    return car;
  }
  let population = [];
  const infoEl = document.getElementById('info');
  const fitnessEl = document.getElementById('fitness');
  let generationCounter = 0;

  const ga = new GA({
    populationSize: 15,
    mutationProbability: 0.05,
    clonesToSurvive: 0,
    randomDNA() {
      const genesLength = 12;
      const randomPoints = [];
      let i = 0;
      for (i; i < genesLength; i++) {
        randomPoints.push(Vec2(random(-3.0, 3.0), random(0.0, 3.0)));
      }
      const genes = pl.Polygon(randomPoints).m_vertices;

      population.push(createCar(genes));
      
      return genes;
    },
    mutate(gene, index) {
      return Vec2(random(-3.0, 3.0), random(0.0, 3.0));
    },
    fitness(genes, index) {
      const sum = population.reduce(
        (total, current) => total + current.getPosition().x,
        0
      );
      const x = population[index].getPosition().x;
      
      return Math.min(x / sum, 1);
    },
    onEpoch(nextPopulation) {
      // console.log('fittest', nextPopulation[0].genes);
      testbed.x = 0;
      toDestroy.forEach(element => world.destroyBody(element));
      population = nextPopulation.map(dna => createCar(dna.genes));
      fittestCar = population[0];
      bestX = 0;
      stuck = 0;
      paused = false;
      generationCounter++;
      infoEl.innerHTML = `Generation ${generationCounter}`;
      // setTimeout(() => ga.epoch(), 0);
    }
  });

  let fittestCar = population[0];
  let bestX = 0;
  let stuck = 0;
  let paused = false;

  testbed.step = function() {
    if (paused) {
      return;
    }
    var oldCp = fittestCar.getPosition();
    let fitnessList = [];
    population.forEach(car => {
      let cx = car.getPosition().x;
      if (car.getPosition().x > oldCp.x && car.getPosition().y > -10) {
        fittestCar = car;
      }
      fitnessList.push(cx);
    });
    var cp = fittestCar.getPosition();
    
    if (cp.x > testbed.x + 10) {
      testbed.x = cp.x - 10;

    } else if (cp.x < testbed.x - 10) {
      testbed.x = cp.x + 10;
    }
    
    const total = fitnessList
      .reduce((total, current) => total + current, 0);
    fitnessEl.innerHTML = fitnessList
      .sort((a, b) => b - a)
      .map(x => `<li>${((x/total) * 100).toFixed(2)}%</li>`)
      .join('');
    
    if (Math.floor(cp.x) > bestX && cp.y > -10) {
      bestX = Math.floor(cp.x);
      stuck = 0;
      return;
    }

    stuck += 1;

    if (stuck > 300) {
      paused = true;
      ga.epoch();
    }
  };

  return world;
});