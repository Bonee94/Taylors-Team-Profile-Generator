const inquirer = require('inquirer');
const Manager = require('./lib/manager-class');
const Engineer = require('./lib/engineer-class');
const Intern = require('./lib/intern-class');
const teamSorter = require('./src/card-template');


const managerArray = [];
const engineerArray = [];
const internArray = [];

const internQuestions = [
    {
        type: 'input',
        message: "Please enter the intern's name",
        name: 'memberName',
    },
    {
        type: 'input',
        message: "Please enter the intern's email adress",
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: "Please enter the intern's school",
        name: 'memberSchool',
    },
    {
        type: 'list',
        message: 'Would you like to add another team meaber?',
        name: 'createMember',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the engineer's name",
        name: 'memberName',
    },
    {
        type: 'input',
        message: "Please enter the engineer's email adress",
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: "Please enter the engineer's Github username",
        name: 'memberGithubUsername',
    },
    {
        type: 'list',
        message: 'Would you like to add another team meaber?',
        name: 'createMember',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    },
]

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter your name',
        name: 'memberName',
    },
    {
        type: 'input',
        message: 'Please enter your email adress',
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: 'Please enter your office number',
        name: 'managerOfficeNumber',
    },
    {
        type: 'list',
        message: 'Would you like to add another team meaber?',
        name: 'createMember',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    },
]

//team manager???s name, employee ID, email address, and office number


const memberInfo = questions => {
    inquirer
        .prompt(
            questions
        )
        .then(response => {
            console.log('\n')
            //console.log(response)

            // If statements for saving and creating members information objects
            if (response.managerOfficeNumber || response.managerOfficeNumber == '') {
                managerArray.push(response);
            } else if (response.memberGithubUsername || response.memberGithubUsername == '') {
                engineerArray.push(response);
            } else if (response.memberSchool || response.memberSchool == '') {
                internArray.push(response);
            }


            // if statements to restart memberinfo prompt or finish building team
            if (response.createMember === "Add Engineer") {
                memberInfo(engineerQuestions);
            } else if (response.createMember === "Add Intern") {
                memberInfo(internQuestions);
            } else if (response.createMember === "Finish building team") {
                console.log(`Team is Finished!`)
                teamSorter(managerArray, engineerArray, internArray);
            }
        })
}


const init = () => {
    memberInfo(managerQuestions);
}

init();