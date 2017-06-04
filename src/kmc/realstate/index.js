import data from './data';

const Data = {
  getRanges(extremes) {
    return extremes.map(extreme => extreme.max - extreme.min);
  },
  getExtremes(data) {
    return data.reduce((result, row) => {
      row.forEach((dimension, index) => {
        if (dimension < result[index].min) {
          result[index].min = dimension;
        }

        if (dimension > result[index].max) {
          result[index].max = dimension;
        }
      });

      return result;
    }, data[0].map(() => ({
      min: Infinity,
      max: -Infinity
    })));
  }
};

const Mean = {
  init(k, data) {
    const extremes = Data.getExtremes(data);
    const ranges = Data.getRanges(extremes);

    return [...Array(k).keys()].map(() => extremes.map((extreme, index) =>
      extreme.min + (Math.random() * ranges[index])
    ));
  },
  makeAssignments(means, data) {
    return data.map(row => {
      const distances = means.map(mean => {
        return Math.sqrt(row.reduce(
          (total, currentDimension, index) => total + currentDimension - mean[index],
          0
        ));
      });

      return distances.indexOf(Math.min(...distances));
    });
  },
  moveMeans(means, data) {
    const assignments = this.makeAssignments(means, data);
    
    const initialData = means.reduce((result, mean) => {
      result.counts.push(0);
      result.sums.push(mean.map(() => 0));
      return result;
    }, {
      sums: [],
      counts: [],
      moved: false,
    });

    const calculatedData = assignments.reduce((result, meanIndex, rowIndex) => {
      const row = data[rowIndex];
      const mean = means[meanIndex];

      result.counts[meanIndex] += 1;

      mean.forEach((dimension) => {
        result.sums[meanIndex][dimension] += row[dimension];
      });

      return result;
    }, initialData);
  }
};

const means = Mean.init(3, data);

