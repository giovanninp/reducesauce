module.exports = (props) =>
  props ? props.reduce((acc, curr) => [...acc, curr], []) : [];
