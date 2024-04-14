const getDecimals = (number) => {
  const priceInParts = String(number).split(".");
  const decimals = priceInParts[1] || "00";

  return decimals.padEnd(2, "0");
};

const removeDecimals = (number) => {
  const priceInParts = String(number).split(".");

  return Number(priceInParts[0]);
};

module.exports = { getDecimals, removeDecimals };
