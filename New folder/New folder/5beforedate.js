// // Get current Date
// let date = new Date();

// // add 5 days to the current date
// date.setDate(date.getDate() + 5);
// console.log("🚀 ~ getDate:", getDate)
let today = new Date();
console.log("today date", today);


function Days(startingDate, number) {

    return new Date(new Date().setDate(startingDate.getDate() - number));
}

console.log("Past : " + Days(new Date("2024-03-05"), 10));