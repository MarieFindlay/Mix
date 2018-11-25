function pluraliseUnit(amount, unit) {
  if (
    ["twist", "lime", "tsp", "cube", "lemon", "slice", "drop"].includes(unit)
  ) {
    return amount === 1 ? unit : `${unit}s`;
  } else if (["dash"].includes(unit)) {
    return amount === 1 ? unit : `${unit}es`;
  } else if (unit === "cherry") {
    return amount === 1 ? unit : "cherries";
  } else if (unit === "leaf") {
    return amount === 1 ? unit : "leaves";
  } else if (unit === "oz") {
    return "ml";
  }
}

export default pluraliseUnit;
