function convertAmountToMl(amount, unit) {
  if (unit == "oz") {
    return amount * 30;
  } else return amount;
}

export default convertAmountToMl;
