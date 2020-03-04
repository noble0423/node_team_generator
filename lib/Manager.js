const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(employeeId, employeeName, employeeEmail, managerOfficeNum) {
        super(employeeId, employeeName, employeeEmail);
        this.officeNum = managerOfficeNum;
    }
    getOfficeNum() {
        console.log(this.officeNum);
    }
    //getRole Overridden to return 'Manager'
}

module.exports = Manager;