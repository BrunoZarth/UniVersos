class Employee {

    constructor(client, employeeService) {
        this.client = client;
        this.employeeService = employeeService;
    }

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

module.exports = (client, employeeService) => new Employee(client, employeeService);
