export const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-");
  return `${month}/${day}/${year}`;
};

export const formatAmount = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return formattedAmount;
};
