import Node from '../lib/Node';
import NodeList from '../lib/NodeList';
import data from './data';

const trainingData = data.splice(0, 100);
const nodes = new NodeList(10);

nodes.setData([
  ...trainingData.map(item => ({
    type: item.Species,
    features: [
      item.SepalLengthCm,
      item.SepalWidthCm,
      item.PetalLengthCm,
      item.PetalWidthCm,
    ]
  })),
  ...data.map(item => ({
    features: [
      item.SepalLengthCm,
      item.SepalWidthCm,
      item.PetalLengthCm,
      item.PetalWidthCm,
    ]
  }))
]);

const predictions = nodes.determineUnknown();

document.getElementById('trainingSet').innerHTML = trainingData.map(item => `
  <tr>
    <td>${item.Species}</td>
    <td>${item.SepalLengthCm}</td>
    <td>${item.SepalWidthCm}</td>
    <td>${item.PetalLengthCm}</td>
    <td>${item.PetalWidthCm}</td>
  </tr>
`).join('');

document.getElementById('testSet').innerHTML = data.map((item, index) => `
  <tr>
    <td>${item.Species === predictions[index].guess.type}</td>
    <td>${item.Species}</td>
    <td>${predictions[index].guess.type}</td>
    <td>${item.SepalLengthCm}</td>
    <td>${item.SepalWidthCm}</td>
    <td>${item.PetalLengthCm}</td>
    <td>${item.PetalWidthCm}</td>
  </tr>
`).join('');


