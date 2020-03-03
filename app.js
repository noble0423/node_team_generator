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

// FUNCTIONS
//==================================================================================================================
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const enterEmployeeDataPrompt = () => {
    inquirer
        .prompt([
            {
                type: `confirm`,
                name: `enterNewEmployeeData`,
                message: `Would you like to enter data for a new Dev Team Member?`,
            }
        ])
        .then(({enterNewEmployeeData}) => {
            if (enterNewEmployeeData === true) {
                employeeTypePrompt();
            }
        })
        .catch((error) => {
            if (error) {
                throw error;
            }
        })
}

const employeeTypePrompt = () => {
    inquirer
        .prompt ([
            {
                type: `list`,
                name: `employeeType`,
                message: `What type of team member are we gathering data for?`,
                choices: [
                    `Intern`,
                    `Employee`,
                    `Manager`,
                    `Engineer`
                ],
            },
        ])
        .then(({employeeType}) => {
            console.log(employeeType);

            switch(employeeType) {
                case `Intern`:
                    console.log(`Running ${employeeType} prompt`);
                    internPrompt();
                    break;
                case `Employee`:
                    console.log(`Run ${employeeType} Prompt`);
                    break;
                case `Manager`:
                    console.log(`Run ${employeeType} Prompt`);
                    break;
                case `Engineer`:
                    console.log(`Run ${employeeType} Prompt`);
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

const internPrompt = () => {
    inquirer  
        .prompt([
            {
                type: `input`,
                name: `internSchool`,
                message: `What school are you currently attending?`,
            },
        ])
        .then((answers) => {
            console.log(answers);
            enterEmployeeDataPrompt();
        })
        .catch((error) => {
            if (error) {
                throw error;
            }
            else {
                console.log(`Successfully gathered Intern Data.`);
            }
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