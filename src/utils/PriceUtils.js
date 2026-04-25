/**
 * Utility functions for price calculations in the Airbnb Clone
 */

/**
 * Calculates the number of nights between check-in and check-out dates
 */
export const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
};

/**
 * Calculates the subtotal (pricePerNight * nights)
 */
export const calculateSubtotal = (pricePerNight, nights) => {
  return pricePerNight * nights;
};

/**
 * Applies discount logic: 
 * 5% off for 7+ nights
 * 10% off for 30+ nights
 */
export const applyDiscount = (subtotal, nights) => {
  let discountRate = 0;
  if (nights >= 30) {
    discountRate = 0.10; // 10% discount
  } else if (nights >= 7) {
    discountRate = 0.05; // 5% discount
  }
  
  const discountAmount = subtotal * discountRate;
  return {
    rate: discountRate * 100,
    amount: discountAmount
  };
};

/**
 * Calculates tax (18% GST on subtotal after discount)
 */
export const calculateTax = (amount) => {
  const GST_RATE = 0.18;
  return amount * GST_RATE;
};

/**
 * Calculates service fee (5% of subtotal)
 */
export const calculateServiceFee = (subtotal) => {
  const SERVICE_FEE_RATE = 0.05;
  return subtotal * SERVICE_FEE_RATE;
};

/**
 * Calculates the total price including discounts, fees, and taxes
 */
export const calculateTotal = (pricePerNight, checkIn, checkOut) => {
  const nights = calculateNights(checkIn, checkOut);
  if (nights === 0) return { total: 0, nights: 0 };

  const subtotal = calculateSubtotal(pricePerNight, nights);
  const { amount: discountAmount, rate: discountRate } = applyDiscount(subtotal, nights);
  const amountAfterDiscount = subtotal - discountAmount;
  const serviceFee = calculateServiceFee(subtotal);
  const tax = calculateTax(amountAfterDiscount + serviceFee);
  
  const total = amountAfterDiscount + serviceFee + tax;

  return {
    nights,
    subtotal,
    discountAmount,
    discountRate,
    serviceFee,
    tax,
    total: Math.round(total)
  };
};
