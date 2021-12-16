export const clone = item => {
  if (!item) {
    return item
  }

  let copyObject = {};

  if (Array.isArray(item)) {
    return item.map(listItem => clone(listItem));
  } else if (item instanceof Object) {
    Object.keys(item).forEach(key => {
      copyObject[key] = clone(item[key]);
    });
    return copyObject;
  } else if (item instanceof Date) {
    return new Date(item);
  } else if (item instanceof RegExp) {
    return new RegExp(item);
  } else if (item instanceof Function) {
    return item && item?.newFns ? new Function("return " + item.toString())() : item;
  } else if ([undefined, null].indexOf(item) > -1) {
    return item;
  } else {
    if (item.constructor.name === "Symbol") {
      return Symbol(
        item
          .toString()
          .replace(/^Symbol\(/, "")
          .slice(0, -1)
      );
    }
    return item.__proto__.constructor(item);
  }
};
