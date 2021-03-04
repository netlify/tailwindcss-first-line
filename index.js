const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant, e }) {
  addVariant("first-line", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const newClass = e(`first-line${separator}${className}`);
      return `.${newClass}:first-line`;
    });
  });
});
