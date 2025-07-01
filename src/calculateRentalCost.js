/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAYS = 40;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  let basePrice = days * PRICE_PER_DAYS;

  if (days >= LONG_TERM) {
    return (basePrice -= LONG_TERM_DISCOUNT);
  }

  if (days >= SHORT_TERM) {
    return (basePrice -= SHORT_TERM_DISCOUNT);
  }

  return basePrice;
}

module.exports = calculateRentalCost;
