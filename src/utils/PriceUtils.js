export const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
};

export const calculateSubtotal = (pricePerNight, nights) => pricePerNight * nights;
export const calculateServiceFee = (subtotal) => Math.round(subtotal * 0.14);
export const calculateTotal = (pricePerNight, nights) => {
  const subtotal = calculateSubtotal(pricePerNight, nights);
  return subtotal + calculateServiceFee(subtotal);
};
