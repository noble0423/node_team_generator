const Employee = require("./Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(employeeId, employeeName, employeeEmail, engineerGHUsername) {
        super(employeeId, employeeName, employeeEmail);
        this.ghUsername = engineerGHUsername;
    }
    getGHUsername() {
        console.log(this.ghUsername);
    }
    //getRole Overridden to return 'Engineer'
}

module.exports = Engineer;