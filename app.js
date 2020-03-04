// VARIABLES
//==================================================================================================================
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

let employeeIDCounter = 1;

const teamMemberArr = [];

// FUNCTIONS
//==================================================================================================================
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const enterEmployeeDataPrompt = () => {
    inquirer
        .prompt([
            {
                type: `confirm`,
                name: `enterNewEmployee`,
                message: `Would you like to enter data for a new Dev Team Member?`,
            }
        ])
        .then(({enterNewEmployee}) => {
            if (enterNewEmployee === true) {
                generalEmployeeInfo();
            }
            else if (enterNewEmployee === false && teamMemberArr.length > 0) {
                writeToHTML();
            }
            
        })
        .catch((error) => {
            if (error) {
                throw error;
            }
        })
}

const generalEmployeeInfo = () => {
    inquirer
        .prompt ([
            {
                type: `input`,
                name: `employeeName`,
                message: `Please enter employee's name.`,
            },
            {
                type: `input`,
                name: `employeeEmail`,
                message: `Please enter employee's email address.`,
            },
        ])
        .then((generalAnswers) => {
            employeeTypePrompt(generalAnswers);
        })
}

const employeeTypePrompt = (genEmpInfo) => {
    inquirer
        .prompt ([
            {
                type: `list`,
                name: `employeeType`,
                message: `What type of team member are we gathering data for?`,
                choices: [
                    `Intern`,
                    `Engineer`,
                    `Manager`,
                ],
            },
        ])
        .then(({employeeType}) => {

            switch(employeeType) {
                case `Intern`:
                    internPrompt(genEmpInfo);
                    break;
                case `Engineer`:
                    engineerPrompt(genEmpInfo);
                    break;
                case `Manager`:
                    managerPrompt(genEmpInfo);
                    break;
                default:
                    console.log(`Let's try this again (run the main prompt again)`);
            }
        }) 
        .catch((error) => {
            if (error) {
                throw error
            }
            else {
                console.log(`Let's begin gathering Team Member Data.`);
            }
        })
}

const internPrompt = (basicEmpInfo) => {
    inquirer  
        .prompt([
            {
                type: `input`,
                name: `internSchool`,
                message: `What school are you currently attending?`,
            },
        ])
        .then(({internSchool}) => {
            const intern = new Intern(employeeIDCounter, basicEmpInfo.employeeName, basicEmpInfo.employeeEmail, internSchool);

            teamMemberArr.push(intern);
            console.log(teamMemberArr);

            employeeIDCounter++;

            // console.log(`intern obj`, intern);

            enterEmployeeDataPrompt();
        })
        .catch((error) => {
            if (error) {
                throw error;
            }
        })
}

const engineerPrompt = (basicEmpInfo) => {
    inquirer
        .prompt([
            {
                type: `input`,
                name: `GHUser`,
                message: `Please enter their GitHub username.`,
            }
        ])
        .then(({GHUser}) => {
            const engineer = new Engineer(employeeIDCounter, basicEmpInfo.employeeName, basicEmpInfo.employeeEmail, GHUser);

            teamMemberArr.push(engineer);
            console.log(teamMemberArr);

            employeeIDCounter++;

            // console.log(`engineer obj`, engineer);

            enterEmployeeDataPrompt();
        })
        .catch((error) => {
            if (error) {
                throw error;
            }
        })
}

const managerPrompt = (basicEmpInfo) => {
    inquirer
        .prompt([
            {
                type: `input`,
                name: `mgrOfficeNum`,
                message: `Please enter their Office Number`,
            },
        ])
        .then(({mgrOfficeNum}) => {
            const manager = new Manager(employeeIDCounter, basicEmpInfo.employeeName, basicEmpInfo.employeeEmail, mgrOfficeNum);

            teamMemberArr.push(manager);
            console.log(teamMemberArr);

            employeeIDCounter++;

            // console.log(`new mgr obj`, manager);

            enterEmployeeDataPrompt();
        })
        .catch((error) => {
            if (error) {
                throw error;
            };
        })
}

const writeToHTML = () => {
    return fs.writeFile(outputPath, render(teamMemberArr), (error) => {
        if (error) {
            throw error
        }
        console.log(`Successfully created Team Member HTML.`);
    })
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```


// MAIN PROCESS
//==================================================================================================================
enterEmployeeDataPrompt();