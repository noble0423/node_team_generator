const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(employeeId, employeeName, employeeEmail, managerOfficeNum) {
        super(employeeId, employeeName, employeeEmail);
        this.officeNum = managerOfficeNum;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNum;
    }
    // getRole() {
    //     return this.role;
    // }
}

module.exports = Manager;