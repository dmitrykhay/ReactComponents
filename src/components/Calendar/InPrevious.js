function getDaysInPreviousMonth(year, month) {
  const date = new Date(year, month, 0);
  const previousMonth = date.getMonth();
  const previousYear = previousMonth === 11 ? year - 1 : year;
  const daysInPreviousMonth = new Date(previousYear, previousMonth + 1, 0).getDate();
  return Array.from({ length: date.getDay() }, (_, i) => daysInPreviousMonth - i).reverse();
}

export default getDaysInPreviousMonth;
