const { camelToSnakeCase, getParams } = require("./utils");

const createActions = (actions = {}, prefix = "") =>
  Object.entries(actions).reduce(
    (acc, [key = "", params = null]) => {
      if (!key) throw new Error("Action key can't be null");

      const Type = `${prefix}/${camelToSnakeCase(key)}`;

      const formattedParams = getParams(params);

      const Creator = (...props) => ({
        type: Type,
        ...formattedParams.reduce(
          (prevParam, paramKey, index) => ({
            ...prevParam,
            [paramKey]: props[index] ?? null,
          }),
          {}
        ),
      });

      return {
        Creators: { ...acc.Creators, [key]: Creator },
        Types: { ...acc.Types, [key]: Type },
      };
    },
    { Types: {}, Creators: {} }
  );

module.exports = createActions;
