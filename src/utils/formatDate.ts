export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {month: "long", day: "numeric", year: "numeric"}).format(date).toLocaleLowerCase();
}
