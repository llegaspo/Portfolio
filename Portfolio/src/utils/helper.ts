export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const getThemeColor = (count: number) => {
  if (count === 0) return "rgba(31, 41, 55, 0.4)";
  if (count <= 2) return "#0f4c5c";
  if (count <= 5) return "#0891b2";
  if (count <= 10) return "#22d3ee";
  return "#bae6fd";
};
