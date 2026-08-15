export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const getThemeColor = (count: number) => {
  if (count === 0) return "rgba(19, 27, 38, 0.6)";
  if (count <= 2) return "#1e3a8a";
  if (count <= 5) return "#2563eb";
  if (count <= 10) return "#5b9dff";
  return "#c2d8ff";
};
