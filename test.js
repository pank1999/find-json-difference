const { jsonDiff } = require("./dist/index.js");

const json1 = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

const json2 = {
  name: "John Doe",
  age: 35,
  address: {
    street: "123 Main St",
    city: "Los Angeles",
    state: "CA",
  },
  occupation: "Software Engineer",
};

const differences = jsonDiff(json1, json2);

console.log(differences);
