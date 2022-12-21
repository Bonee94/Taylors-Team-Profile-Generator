const fs = require('fs');

function generateHTML(managerArray, engineerArray, internArray) {

    let idCounter = 2
    managerHTML = managerToHTML(managerArray)
    engineerHTML = engineerToHTML(engineerArray, idCounter)

    idCounter = engineerArray.length + 2
    internHTML = internToHTML(internArray, idCounter)

}


function managerToHTML(managerArray) {

    if (managerArray.length > 0) {

        let name = managerArray[0].memberName;
        let id = '1';
        let role = 'Manager';
        let email = managerArray[0].memberEmail;
        let officeNum = managerArray[0].managerOfficeNumber;

        let html = `
    <div class="card">
                <div class="card-header">
                    <h2 id="manager-name">${name}</h2>
                    <h3 id="manager-title"><i class="fa fa-mug-hot"></i> ${role}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li id="manager-id">ID: ${id}</li>
                        <li id="manager-email">Email: 
                        <a href="mailto:${email}">${email}</a>
                        </li>
                        <li id="manager-office-num">Office Number: ${officeNum}</li>
                    </ul>
                </div>
            </div>
    `

        return html
    }

    return ''
}


function engineerToHTML(engineerArray, idCounter) {
    if (engineerArray.length > 0) {
        let html = ''

        for (let index = 0; index < engineerArray.length; index++) {

            let name = engineerArray[index].memberName;
            let role = 'Engineer';
            let email = engineerArray[index].memberEmail;
            let github = engineerArray[index].memberGithubUsername;

            html += `
                <div class="card">
                <div class="card-header">
                    <h2 id="engineer-name">${name}</h2>
                    <h3 id="engineer-title"><i class="fa fa-glasses"></i>
                     ${role}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li id="engineer-id">ID: ${idCounter}</li>
                        <li id="engineer-email">Email: 
                        <a href="mailto:${email}">${email}</a>
                        </li>
                        <li id="engineer-github">Github: 
                        <a href="https://github.com/${github}">${github}</a>
                        </li>
                    </ul>
                </div>
            </div>
    `
            idCounter++
        }

        return html;
    }

    return '';
}