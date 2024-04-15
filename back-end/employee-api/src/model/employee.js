class Employee {

    constructor(arg, employeeService) {
        if(arg instanceof require('pg').Client) {
            // Initialize as a client
            this.client = arg;
            this.employeeService = employeeService;
        } else {
            // Initialize as an employee object
            this.id = arg.id;
            this.name = arg.name;
            this.position = arg.position;
            this.email = arg.email;
            this.password = arg.password;
            this.adress = arg.adress;
            this.nationality = arg.nationality;
            this.age = arg.age;
            this.education_level = arg.education_level;
            this.gender = arg.gender;
            this.ethnicity = arg.ethnicity;
            this.lgbtqi = arg.lgbtqi;
            this.pcd = arg.pcd;
            this.neurodiverse = arg.neurodiverse;
            this.lowIncomeBackground = arg.lowIncomeBackground;
            this.workModel = arg.workModel;
            this.hireDate = arg.hireDate;
        }
    }

    // CLASS METHODS

    validateFields() {
        for (let key in this) {
            if (this[key] === undefined) {
                throw new Error(`The field ${key} is required`);
            }
        }
    }

    // ASSYNC METHODS
    // CREATE

    async newEmployee() {
        return this.employeeService.newEmployee();
    }

    async sendMessage() {
        return this.employeeService.sendMessage();
    }

    async sendResearch() {
        return this.employeeService.sendResearch();
    }
    
    // READ
    async getResearchById() {
        return this.employeeService.getResearchById();
    }
    
    async getAllResearch() {
        return this.employeeService.getAllResearch();
    }
    
    async getLastResearch() {
        return this.employeeService.getLastResearch();
    }
    
    // UPDATE
    async updateEmployee() {
        return this.employeeService.updateEmployee();
    }
    
    // DELETE
    async deleteEmployee() {
        return this.employeeService.deleteEmployee();
    }
    
    // "getBy" OPTIONS
    async getAll() {
        return this.employeeService.getAll();
    }
    
    async getById() {
        return this.employeeService.getById();
    }
    
    async getByName() {
        return this.employeeService.getByName();
    }
    
    async getByPosition() {
        return this.employeeService.getByPosition();
    }
    
    async getByEmail() {
        return this.employeeService.getByEmail();
    }
    
    async getByAdress() {
        return this.employeeService.getByAdress();
    }
    
    async getByNationality() {
        return this.employeeService.getByNationality();
    }   

    async getByAge() {
        return this.employeeService.getByAge();
    }
    
    async getByAgeRange() {
        return this.employeeService.getByAgeRange();
    }
    
    async getByEducationLevel() {
        return this.employeeService.getByEducationLevel();
    }
    
    async getByGender() {
        return this.employeeService.getByGender();
    }
    
    async getByEthnicity() {
        return this.employeeService.getByEthnicity();
    }
    
    async getByLgbtqi() {
        return this.employeeService.getByLgbtqi();
    }
    
    async getByPcd() {
        return this.employeeService.getByPcd();
    }
    
    async getByNeurodiverse() {
        return this.employeeService.getByNeurodiverse();
    }
    
    async getByLowIncomeBackground() {
        return this.employeeService.getByLowIncomeBackground();
    }
    
    async getByWorkModel() {
        return this.employeeService.getByWorkModel();
    }
    
    async getByHireDate() {
        return this.employeeService.getByHireDate();
    }
    
}

module.exports = (arg, employeeService) => new Employee(arg, employeeService);
