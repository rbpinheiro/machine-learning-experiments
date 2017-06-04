import Node from '../lib/Node';
import NodeList from '../lib/NodeList';
import data from './data';



const trainingData = data.splice(0, 400);
const nodes = new NodeList(10);

nodes.setData([
  ...trainingData.map(item => ({
    type: item.diagnosis,
    features: [
      item.radius_mean,
      item.texture_mean,
      item.perimeter_mean,
      item.area_mean,
      item.smoothness_mean,
      item.compactness_mean,
      item.concavity_mean,
      item.concave_points_mean,
      item.symmetry_mean,
      item.fractal_dimension_mean,
      item.radius_se,
      item.texture_se,
      item.perimeter_se,
      item.area_se,
      item.smoothness_se,
      item.compactness_se,
      item.concavity_se,
      item.concave_points_se,
      item.symmetry_se,
      item.fractal_dimension_se,
      item.radius_worst,
      item.texture_worst,
      item.perimeter_worst,
      item.area_worst,
      item.smoothness_worst,
      item.compactness_worst,
      item.concavity_worst,
      item.concave_points_worst,
      item.symmetry_worst,
      item.fractal_dimension_worst,
    ]
  })),
  ...data.map(item => ({
    features: [
      item.radius_mean,
      item.texture_mean,
      item.perimeter_mean,
      item.area_mean,
      item.smoothness_mean,
      item.compactness_mean,
      item.concavity_mean,
      item.concave_points_mean,
      item.symmetry_mean,
      item.fractal_dimension_mean,
      item.radius_se,
      item.texture_se,
      item.perimeter_se,
      item.area_se,
      item.smoothness_se,
      item.compactness_se,
      item.concavity_se,
      item.concave_points_se,
      item.symmetry_se,
      item.fractal_dimension_se,
      item.radius_worst,
      item.texture_worst,
      item.perimeter_worst,
      item.area_worst,
      item.smoothness_worst,
      item.compactness_worst,
      item.concavity_worst,
      item.concave_points_worst,
      item.symmetry_worst,
      item.fractal_dimension_worst,
    ]
  }))
]);

const predictions = nodes.determineUnknown();

document.getElementById('trainingSet').innerHTML = trainingData.map(item => `
  <tr>
    <td>${item.diagnosis}</td>
    <td>${item.radius_mean}</td>
    <td>${item.texture_mean}</td>
    <td>${item.perimeter_mean}</td>
    <td>${item.area_mean}</td>
    <td>${item.smoothness_mean}</td>
    <td>${item.compactness_mean}</td>
    <td>${item.concavity_mean}</td>
    <td>${item.concave_points_mean}</td>
    <td>${item.symmetry_mean}</td>
    <td>${item.fractal_dimension_mean}</td>
    <td>${item.radius_se}</td>
    <td>${item.texture_se}</td>
    <td>${item.perimeter_se}</td>
    <td>${item.area_se}</td>
    <td>${item.smoothness_se}</td>
    <td>${item.compactness_se}</td>
    <td>${item.concavity_se}</td>
    <td>${item.concave_points_se}</td>
    <td>${item.symmetry_se}</td>
    <td>${item.fractal_dimension_se}</td>
    <td>${item.radius_worst}</td>
    <td>${item.texture_worst}</td>
    <td>${item.perimeter_worst}</td>
    <td>${item.area_worst}</td>
    <td>${item.smoothness_worst}</td>
    <td>${item.compactness_worst}</td>
    <td>${item.concavity_worst}</td>
    <td>${item.concave_points_worst}</td>
    <td>${item.symmetry_worst}</td>
    <td>${item.fractal_dimension_worst}</td>
  </tr>
`).join('');

document.getElementById('testSet').innerHTML = data.map((item, index) => `
  <tr>
    <td>${item.diagnosis === predictions[index].guess.type}</td>
    <td>${item.diagnosis}</td>
    <td>${predictions[index].guess.type}</td>
    <td>${item.radius_mean}</td>
    <td>${item.texture_mean}</td>
    <td>${item.perimeter_mean}</td>
    <td>${item.area_mean}</td>
    <td>${item.smoothness_mean}</td>
    <td>${item.compactness_mean}</td>
    <td>${item.concavity_mean}</td>
    <td>${item.concave_points_mean}</td>
    <td>${item.symmetry_mean}</td>
    <td>${item.fractal_dimension_mean}</td>
    <td>${item.radius_se}</td>
    <td>${item.texture_se}</td>
    <td>${item.perimeter_se}</td>
    <td>${item.area_se}</td>
    <td>${item.smoothness_se}</td>
    <td>${item.compactness_se}</td>
    <td>${item.concavity_se}</td>
    <td>${item.concave_points_se}</td>
    <td>${item.symmetry_se}</td>
    <td>${item.fractal_dimension_se}</td>
    <td>${item.radius_worst}</td>
    <td>${item.texture_worst}</td>
    <td>${item.perimeter_worst}</td>
    <td>${item.area_worst}</td>
    <td>${item.smoothness_worst}</td>
    <td>${item.compactness_worst}</td>
    <td>${item.concavity_worst}</td>
    <td>${item.concave_points_worst}</td>
    <td>${item.symmetry_worst}</td>
    <td>${item.fractal_dimension_worst}</td>

  </tr>
`).join('');


