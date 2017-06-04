import R from 'ramda';

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class DNA {
  constructor(props, genes) {
    this.props = props;
    this.genes = genes || props.randomDNA();
    this._fitness = null;
  }

  fitness(index) {
    if (!this._fitness) {
      this._fitness = this.props.fitness(this.genes, index);
      if (this._fitness > 1) {
        throw new Error(`The fitness function should return values between 0 and 1. Got ${this._fitness}`);
      }
    }

    return this._fitness;
  }

  crossover(partner) {
    const midpoint = random(0, Math.min(this.genes.length, partner.genes.length) - 1);

    return new DNA(this.props, [
      ...R.take(midpoint, this.genes),
      ...R.takeLast(this.genes.length - midpoint, partner.genes),
    ]);
  }

  mutate(mutationProbability) {
    this.genes = R.addIndex(R.map)((gene, index) => {
      if (Math.random() < mutationProbability) {
        return this.props.mutate(gene, index);
      }
      return gene;
    }, this.genes);
  }
}

class Population {
  constructor(props) {
    this.props = props;
    this.population = [];
    let i = 0;
    const populationSize = props.populationSize;
    for (i; i < populationSize; i++) {
      this.population.push(new DNA(props));
    }
  }

  matingPool() {
    return R.pipe(
      R.addIndex(R.reduce)((pool, dna, index) => {
        let matingProbability = dna.fitness(index) * 100;

        while(matingProbability > 0) {
          pool.push(dna);
          matingProbability -= 1;
        }

        return pool;
      }, []),
      pool => pool.length ? pool : this.population
    )(this.population);
  }

  nextGeneration() {
    const matingPool = this.matingPool();
    this.population = R.addIndex(R.map)((dna, index) => {
      if (index < this.props.clonesToSurvive) {
        return dna;
      }
      
      const parent1 = matingPool[random(0, matingPool.length - 1)];
      const parent2 = matingPool[random(0, matingPool.length - 1)];
      const child = parent1.crossover(parent2);
      
      child.mutate(this.props.mutationProbability);

      return child;
    }, this.sorted());

    return this.population;
  }

  sorted() {
    return R.pipe(
      R.addIndex(R.map)((dna, index) => ({
        dna,
        index
      })),
      R.sortBy(dna => -dna.dna.fitness(dna.index)),
      R.map(R.prop('dna'))
    )(this.population);
  }

  fittest(target) {
    return this.sorted()[0];
  }
}

class GA {
  constructor(props) {
    this.props = props;
    this.population = new Population(props);
    this.loop = ::this.loop;
  }

  epoch() {
    this.population.nextGeneration();
    this.currentPopulation = this.population.sorted();
    if (this.props.onEpoch) {
      this.props.onEpoch(this.currentPopulation);
    }
  }

  loop() {
    this.epoch();
    if (!this.props.isDone(this.currentPopulation)) {
      return setTimeout(this.loop, 500);
    }
  }
}

export default GA;