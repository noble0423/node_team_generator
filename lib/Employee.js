// TODO: Write code to define and export the Employee class
class Employee {
    constructor(idProp, nameProp, emailProp) {
        this.id = idProp;
        this.name = nameProp;
        this.email = emailProp;
    }
    // * getName()
    getName() {
        console.log(this.name);
    }
    // * getId()
    getId() {
        console.log(this.id);
    }
    // * getEmail()
    getEmail() {
        console.log(this.email);
    }
    // * getRole() // Returns 'Employee'
    getRole() {
        console.log(`How does this work?`);
    }

}

module.exports = Employee;