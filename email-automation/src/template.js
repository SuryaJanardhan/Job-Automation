const Handlebars = require("handlebars");

function compileTemplate(templateString) {
  const compiled = Handlebars.compile(templateString || "");
  return (data = {}) => compiled(data || {});
}

module.exports = { compileTemplate };
