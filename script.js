import moment from "moment";

// Let's make date and time with moment
// With parameter
console.log(moment("2023-07-14").format("YYYY MM DD"));
// Without parameter
// moment will get current date and time
console.log(moment().format("YYYY MMMM DD"));

// Manipulate
console.log("Manipulate our current datetime:");
const currentDatetime = moment();

// Add
console.table({
  "Current Date": currentDatetime.format("YYYY MMMM DD"),
  "Add 5 days": currentDatetime.add(5, "d").format("YYYY MMMM DD"),
});

// Subtract
console.table({
  "Current Date": currentDatetime.format("YYYY MMMM DD"),
  "Subtract 10 months": currentDatetime
    .subtract(10, "M")
    .format("YYYY MMMM DD"),
});

// Start of Time
console.table({
  "Current Date": currentDatetime.format("YYYY MMMM DD"),
  "1st day of current date is : ": currentDatetime
    .startOf("year")
    .format("dddd"),
});

// End of Time
console.table({
  "Current Date": currentDatetime.format("YYYY MMMM DD"),
  "Last day of current date is : ": currentDatetime
    .endOf("year")
    .format("dddd"),
});
