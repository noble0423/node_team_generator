const Employee = require("./Employee");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(employeeId, employeeName, employeeEmail, internSchool) {
        super(employeeId, employeeName, employeeEmail);
        this.school = internSchool;
    }
    getSchool() {
        console.log(this.school);
    }
    //getRole Overridden to return 'Intern'
}

module.exports = Intern;