import type { Template } from '../../models';

export const d3Starter: Template = {
  name: 'd3',
  title: 'D3 Starter',
  thumbnail: 'assets/templates/d3.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
    <div class="container">
      <h3>D3.js</h3>
      <div id="chart">Loading...</div>
    </div>
    `,
  },
  style: {
    language: 'css',
    content: `
.container {
  background: #fff;
  border-radius: 0.5em;
  color: #111;
  padding: 1em;
  text-align: center;
  font: 1em sans-serif;
}
.bar {
  fill: steelblue;
}

.bar:hover {
  fill: orange;
}
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
import * as d3 from "d3";

const data = [150, 230, 180, 90];

const svg = d3
  .select("#chart")
  .html('')
  .append("svg")
  .attr("width", 300)
  .attr("height", 200);

svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("width", (d) => d)
  .attr("height", 40)
  .attr("y", (d, i) => i * 50 + 10)
  .attr("x", 10);
`.trimStart(),
  },
};
