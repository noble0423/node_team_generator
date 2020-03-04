const Employee = require("./Employee");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(employeeId, employeeName, employeeEmail, internSchool) {
        super(employeeId, employeeName, employeeEmail);
        this.school = internSchool;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
    // getRole() {
    //     return this.role;
    // }
}

module.exports = Intern;