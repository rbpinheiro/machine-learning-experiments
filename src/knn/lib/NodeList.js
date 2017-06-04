import Node from './Node';

export default class NodeList {
  constructor(k) {
    this.nodes = [];
    this.k = k;
  }

  setData(data) {
    this.inputSize = data[0].features.length;
    this.nodes = data.map(nodeData => new Node(nodeData, this.inputSize));
  }

  add(nodeData) {
    this.nodes.push(new Node(nodeData, this.inputSize));
  }

  calculateRanges() {
    this.ranges = this.nodes.reduce((result, currentNode) => {
      currentNode.features.forEach((feature, index) => {
        if (feature < result[index].min) {
          result[index].min = feature;
        }

        if (feature > result[index].max) {
          result[index].max = feature;
        }
      });

      return result;
    }, this.nodes[0].features.map(() => ({
      min: Infinity,
      max: -Infinity
    })));
  }

  determineUnknown() {
    this.calculateRanges();

    const nodesWithKnownTypes = this.nodes.filter(node => node.type);
    const nodesWithUnknownTypes = this.nodes
      .filter(node => !node.type)
      .map(node => {
        node.neighbours = [...nodesWithKnownTypes];
        node.measureDistances(this.ranges);
        node.sortByDistance();

        return {
          ...node,
          guess: node.guessType(this.k),
        };
      });

    this.nodes = [
      ...nodesWithKnownTypes,
      ...nodesWithUnknownTypes
    ];

    return nodesWithUnknownTypes;
  }

  draw(canvasId, labelId) {
    const colorFromType = type => {
      if (type === 'apartment') {
        return 'red';
      }

      if (type === 'house') {
        return 'green';
      }

      if (type === 'flat') {
        return 'blue';
      }

      return '#666666';
    };
    const finalRanges = this.ranges.map(range => range.max - range.min);

    const canvas = document.getElementById(canvasId);
    const label = document.getElementById(labelId);
    const ctx = canvas.getContext('2d');
    const width = 400;
    const height = 400;
    ctx.clearRect(0, 0, width, height);

    this.nodes.forEach(node => {
      const padding = 40;
      const xShift = (width - padding) / width;
      const yShift = (height - padding) / height;
      const x = (node.features[0] - this.ranges[0].min) * (width / finalRanges[0]) * xShift + (padding / 2);
      const y = Math.abs(
        ((node.features[1] - this.ranges[1].min) * (height / finalRanges[1]) * yShift + (padding / 2)) - height
      );

      ctx.save();
      ctx.fillStyle = colorFromType(node.type);
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI*2, true);
      ctx.fill();
      ctx.closePath();

      if (!node.type) {
        ctx.strokeStyle = colorFromType(node.guess.type);
        const radius = (node.neighbours[this.k - 1].distance * width) * xShift;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI*2, true);
        ctx.stroke();
        ctx.closePath();
        label.innerText = node.guess.type;
      }

      ctx.restore();
    });
  }
}