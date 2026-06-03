const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = () => {
  const file = path.join(__dirname, "publications.yaml");
  const pubs = yaml.load(fs.readFileSync(file, "utf8"));

  // Preserve first-seen order of years (yaml is already newest-first, Thesis last)
  const order = [];
  const groups = {};
  for (const p of pubs) {
    if (!groups[p.year]) {
      groups[p.year] = [];
      order.push(p.year);
    }
    groups[p.year].push(p);
  }
  return order.map((year) => ({ year, items: groups[year] }));
};
