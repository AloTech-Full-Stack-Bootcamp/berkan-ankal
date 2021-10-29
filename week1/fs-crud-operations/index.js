const fs = require("fs");

//create assignment folder
fs.mkdirSync("odev");

// create
fs.writeFileSync(
  "odev/employees.json",
  JSON.stringify([{ name: "Employee 1 Name", salary: 2000 }])
);

// read
const data = fs.readFileSync("odev/employees.json", "utf8");
console.log(data);

// update
fs.appendFileSync(
  "odev/employees.json",
  JSON.stringify({ name: "Employee 2 Name", salary: 4000 })
);

// delete
fs.unlinkSync("odev/employees.json");

// delete empty folder
setTimeout(() => {
  fs.rmdirSync("Odev");
}, 3000);
