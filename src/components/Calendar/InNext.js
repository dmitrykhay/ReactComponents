function getDaysInNextMonth(year, month) {
  const date = new Date(year, month + 1, 0);

  if (date.getDay() === 0) {
    return [];
  }

  return Array.from({ length: 7 - date.getDay() }, (_, i) => i + 1);
}

export default getDaysInNextMonth;
