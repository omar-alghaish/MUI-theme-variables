import React from "react";

interface Theme {
  [key: string]: any;
}

const useVariables = (theme: Theme) => {
  const camelToKebab = (str: string) => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  };

  const flattenObject = (
    obj: Record<string, any>,
    prefix = ""
  ): Record<string, any> => {
    return Object.keys(obj).reduce((acc, key) => {
      if (typeof obj[key] !== "function") {
        const cssVarName = `--${camelToKebab(prefix + key)}`;
        if (typeof obj[key] === "object" && obj[key] !== null) {
          acc = { ...acc, ...flattenObject(obj[key], `${prefix + key}-`) };
        } else {
          acc[cssVarName] = obj[key] as any; // Specify 'any' type here
        }
      }
      return acc;
    }, {} as Record<string, any>);
  };

  const variables = flattenObject(theme);
  return { variables };
};

export default useVariables;
