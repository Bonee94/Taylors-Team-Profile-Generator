const generateHTML = require("./generateHTML");

//function to receive arrays of information objects and sort them
const teamSorter = (managerArray, engineerArray, internArray) => {
  sortMembers(managerArray);
  sortMembers(engineerArray);
  sortMembers(internArray);

  generateHTML(managerArray, engineerArray, internArray);
};

const sortMembers = (array) => {
  array.sort((a, b) => {
    let nameA = a.memberName.toLowerCase();
    let nameB = b.memberName.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return array;
};

let test = [
  { memberName: "bobby bills" },
  { memberName: "hank hill" },
  { memberName: "taylor turner" },
];

const correctName = (array) => {
  for (index = 0; index < array.length; index++) {
    console.log(array.length);
    let nameLower = array[index].memberName.toLowerCase();
    console.log(nameLower);
    let nameArray = nameLower.split(" ");
    console.log(`Loop correct name on loop ${index}`);

    firstLetter(nameArray);
    console.log(`this is the end of the for loop`)
  }

  //return array;
};

const firstLetter = (array) => {
  let correctName = "";

  for (index = 0; index < array.length; index++) {
     let properName = array[index].charAt(0).toUpperCase() + array[index].slice(1);
    correctName = correctName.concat(`${properName} `);
    console.log("this is correct " + correctName);
  }

  //return correctName;
};

console.log(test);
correctName(test);
console.log(test);
module.exports = teamSorter;
