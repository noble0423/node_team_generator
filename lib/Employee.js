// TODO: Write code to define and export the Employee class
class Employee {
    constructor(idProp, nameProp, emailProp) {
        this.id = idProp;
        this.name = nameProp;
        this.email = emailProp;
        this.role = "Employee";
    }
    // * getName()
    getName() {
        return this.name;
    }
    // * getId()
    getId() {
        return this.id;
    }
    // * getEmail()
    getEmail() {
        return this.email;
    }
    // * getRole() // Returns 'Employee'
    getRole() {
        return this.role;
    }

}

module.exports = Employee;