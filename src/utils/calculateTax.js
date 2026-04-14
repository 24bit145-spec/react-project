export function calculateTax(subtotal, taxRate = 18) {
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  return {
    taxAmount,
    total,
  };
}