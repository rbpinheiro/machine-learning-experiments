import data from './data';

class DataManager {
  constructor(data) {
    this.inputLabels = Object.keys(data[0]);
    this.data = data.map(::this.normalizeInput);
    this.categories = [];
    this.counts = this.inputLabels.map((_, index) => this.data.reduce((sums, input) => {
      const category = input[input.length - 1];
      const value = input[index];

      if (!this.categories.includes(category)) {
        this.categories.push(category);
        Object.keys(sums).forEach((key) => {
          sums[key][category] = 0;
        });
      }

      sums[value] = sums[value] || this.categories.reduce((result, category) => {
        result[category] = 0;
        return result;
      }, {});
      
      sums[value][category] += 1;
      

      return sums;
    }, {}));
  }

  normalizeInput(input) {
    return this.inputLabels.map(label => input[label]).filter(data => data);
  }

  getCount(inputIndex, value) {
    if (inputIndex < 0) {
      return this.counts[this.counts.length + inputIndex][value];
    }
    return this.counts[inputIndex][value];
  }
}
class Bayes {
  constructor(data) {
    this.data = new DataManager(data);
  }

  predict(rawInput) {
    const input = this.data.normalizeInput(rawInput);
    const probabilities = this.data.categories.map(
      (category, index) => input.map((inputValue, index) => {
        return this.data.getCount(index, inputValue)[category] / this.data.getCount(-1, category)[category];
      })
    );
    const likelihoods = this.data.categories.map((category, index) => {
      return probabilities[index].reduce((result, probability) => {
        return result * probability;
      }, 1);
    });
    const totalLikehood = likelihoods.reduce((result, current) => result + current, 0);
    const outputProbabilities = likelihoods.map(
      likelihood => totalLikehood / likelihood
    );
    const totalOutputProbability = outputProbabilities.reduce(
      (result, current) => result + current,
      0
    );

    return this.data.categories.reduce(
      (output, category, index) => {
        output[category] = (outputProbabilities[index] * 100) / totalOutputProbability;

        return output;
      },
      {}
    )
  }
}

const bayes = new Bayes(data);
const prediction = bayes.predict({
  outlook: "overcast",
  temp: "cool",
  humidity: "normal",
  windy: "TRUE"
});
console.log(prediction);