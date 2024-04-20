const LANGUAGE_BY_CURRENCY = {
  ARS: "es-AR"
};

export const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat(LANGUAGE_BY_CURRENCY[currency] || navigator.language, {
    style: "currency",
    currency,
    minimumFractionDigits: 0
  }).format(amount);
};
