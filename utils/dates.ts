const formatDateToYearMonth = (date: string) => {
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
  });
};

export const generateDateRange = (
  startDate: string,
  endDate: string | undefined
): string => {
  const formattedStartDate = formatDateToYearMonth(startDate);
  const formattedEndDate = endDate ? formatDateToYearMonth(endDate) : "Present";

  return `${formattedStartDate} - ${formattedEndDate}`;
};
