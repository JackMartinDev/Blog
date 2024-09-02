export function getFormattedDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getDateTime(date: string) {
  return new Date(date).toISOString().split("T")[0];
}
