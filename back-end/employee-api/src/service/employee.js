const employee = require("../model/employee");

class EmployeeService {

    constructor(client) {
        this.client = client;
        this.employee = employee;
    }

    // CREATE
    async newEmployee(employee) {
        // Validate the employee fields
        employee.validateFields();

        const query = `INSERT INTO employee (id, name, position, email, password_hash, password_salt, adress, nationality, age, education_level, gender, ethnicity, lgbtqi, pcd, neurodiverse, low_income_background, work_model, hire_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`;
        const values = [employee.id, employee.name, employee.position, employee.email, employee.password.hash, employee.password.salt, employee.adress, employee.nationality, employee.age, employee.education_level, employee.gender, employee.ethnicity, employee.lgbtqi, employee.pcd, employee.neurodiverse, employee.lowIncomeBackground, employee.workModel, employee.hireDate];

        try {
            const result = await this.client.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error(`Error creating new employee: ${error}`);
            throw error;
        }
    }



    async sendMessage() {
        try {
            const results = await this.client.query("INSERT INTO message ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async sendResearch() {
        try {
            const results = await this.client.query("INSERT INTO research ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    // READ
    async getResearchById() {
        try {
            const results = await this.client.query("SELECT * FROM research WHERE id = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAllResearch() {
        try {
            const results = await this.client.query("SELECT * FROM research");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getLastResearch() {
        try {
            const results = await this.client.query("SELECT * FROM research ORDER BY id DESC LIMIT 1");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    // UPDATE
    async updateEmployee() {
        try {
            const results = await this.client.query("UPDATE employee SET ... WHERE id = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    // DELETE
    async deleteEmployee() {
        try {
            const results = await this.client.query("DELETE FROM employee WHERE id = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    // "getBy" OPTIONS
    async getAll() {
        try {
            const results = await this.client.query("SELECT * FROM employee");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getById() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE id = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByName() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE name = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByPosition() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE position = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByEmail() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE email = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByAdress() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE adress = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByNationality() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE nationality = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByAge() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE age = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByAgeRange() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE age BETWEEN ... AND ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByEducationLevel() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE education_level = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByGender() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE gender = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByEthnicity() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE ethnicity = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByLgbtqi() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE lgbtqi = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByPcd() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE pcd = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByNeurodiverse() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE neurodiverse = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByLowIncomeBackground() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE low_income_background = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByWorkModel() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE work_model = ..."); //home, presencial
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getByHireDate() {
        try {
            const results = await this.client.query("SELECT * FROM employee WHERE hire_date = ...");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }


}

module.exports = (client) => new EmployeeService(client);