const generateHTML = require("./generateHTML");

//function to receive arrays of information objects and sort them
const teamSorter = (managerArray, engineerArray, internArray) => {
  sortMembers(managerArray);
  sortMembers(engineerArray);
  sortMembers(internArray);

  correctName(managerArray);
  correctName(engineerArray);
  correctName(internArray);

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

const correctName = (array) => {
  for (let index = 0; index < array.length; index++) {
    let nameLower = array[index].memberName.toLowerCase();
    let nameArray = nameLower.split(" ");
    let finalName = firstLetter(nameArray);

    array[index].memberName = finalName;
  }

  return array;
};

const firstLetter = (array) => {
  let correctName = "";

  for (let index = 0; index < array.length; index++) {
    let properName =
      array[index].charAt(0).toUpperCase() + array[index].slice(1);
    correctName = correctName.concat(`${properName} `);
  }

  return correctName;
};

module.exports = teamSorter;
