export default class Node {
  constructor({features, type}, inputSize) {
    if (features.length !== inputSize) {
      throw `Invalid node, expected features length to be ${inputSize}. ${features}`;
    }
    this.features = features
    this.type = type;
    this.guess = null;
    this.neighbours = [];
  }

  measureDistances(featureRangeDefinitions) {
    const featureRanges = featureRangeDefinitions.map(featureRangeDefinition => 
      featureRangeDefinition.max - featureRangeDefinition.min
    );

    this.neighbours = this.neighbours.map(neighbour => {
      const featuresDelta = featureRanges.map((featureRange, index) => 
        (neighbour.features[index] - this.features[index]) / featureRange
      );

      return {
        ...neighbour,
        distance: Math.sqrt(
          featuresDelta
           .reduce(
            (result, featureDelta) => result + featureDelta * featureDelta,
            0
           )
        )
      };
    });
  }

  sortByDistance() {
    this.neighbours.sort((a, b) => a.distance - b.distance);
  }

  guessType(k) {
    const types = this.neighbours.slice(0, k).reduce((result, neighbour) => {
      if (!result[neighbour.type]) {
        result[neighbour.type] = 0;
      }

      result[neighbour.type] += 1;

      return result;
    }, {});

    const guess = {
      type: null,
      count: 0
    };
    
    Object.keys(types).forEach(type => {
      if (types[type] > guess.count) {
        guess.type = type;
        guess.count = types[type];
      }
    });

    return guess;
  }
}