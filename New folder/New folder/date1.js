
const date = new Date("2024-03-15");
console.log(date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
}));
