const Employee = require("../model/employee");

class EmployeeService {

    constructor(client) {
        this.client = client;
    }

    // CREATE
    async newEmployee(employee) {

        EmployeeValidator.validateFieldsOrThrowError(employee);

        const query = `INSERT INTO employee (id, name, position, email, password_hash, password_salt, adress, nationality, birth_date, education_level, gender, ethnicity, lgbtqi, pcd, neurodiverse, low_income_background, work_model, hire_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`;
        const values = [
            UUIDGenerator.generate(), 
            employee.name, 
            employee.position, 
            employee.email, 
            employee.password.hash, 
            employee.password.salt, 
            employee.adress, 
            employee.nationality, 
            employee.birthDate, 
            employee.education_level, 
            employee.gender, 
            employee.ethnicity, 
            employee.lgbtqi, 
            employee.pcd, 
            employee.neurodiverse, 
            employee.lowIncomeBackground, 
            employee.workModel, 
            employee.hireDate];

        try {
            const result = await this.client.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error(`Error creating new employee: ${error}`);
            throw error;
        }
    }

    async sendMessage(message, employeeId) {
        const employee = await this.getById(employeeId);

        MessageValidator.verifyIfisValidOrThrowError(message);

        const query = `INSERT INTO message (id, message, position, nationality, birth_date, education_level, gender, ethnicity, lgbtqi, pcd, neurodiverse, low_income_background, work_model, hire_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;
        const values = [
            UUIDGenerator.generate(), 
            message, 
            employee.position, 
            employee.nationality, 
            employee.birthDate, 
            employee.education_level, 
            employee.gender, 
            employee.ethnicity, 
            employee.lgbtqi, 
            employee.pcd, 
            employee.neurodiverse, 
            employee.low_income_background, 
            employee.work_model, 
            employee.hire_date
        ];
    
        try {
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    

    async sendResearch(research, employeeId) {
        const employee = await this.getById(employeeId);

        MessageValidator.verifyIfisValidOrThrowError(research);

        const query = `INSERT INTO research (id, research, position, nationality, age, education_level, gender, ethnicity, lgbtqi, pcd, neurodiverse, low_income_background, work_model, hire_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;
        const values = [
            UUIDGenerator.generate(), 
            research, 
            employee.position, 
            employee.nationality, 
            employee.birthDate, 
            employee.education_level, 
            employee.gender, 
            employee.ethnicity, 
            employee.lgbtqi, 
            employee.pcd, 
            employee.neurodiverse, 
            employee.low_income_background, 
            employee.work_model, 
            employee.hire_date
        ];
    
        try {
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    // READ
    async getResearchById(id) {
        try {
            const query = "SELECT * FROM message WHERE id = $1";
            const values = [id];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    

    async getAllResearch() {
        try {
            const results = await this.client.query("SELECT * FROM message");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getLastResearch() {
        try {
            const results = await this.client.query("SELECT * FROM message ORDER BY id DESC LIMIT 1");
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    // UPDATE
    async updateEmployee(employee) {

        const employeeObject = new Employee(employee);
        employeeObject.validateFields();
    
        const query = `UPDATE employee SET name = $2, position = $3, email = $4, password_hash = $5, password_salt = $6, adress = $7, nationality = $8, age = $9, education_level = $10, gender = $11, ethnicity = $12, lgbtqi = $13, pcd = $14, neurodiverse = $15, low_income_background = $16, work_model = $17, hire_date = $18 WHERE id = $1 RETURNING *`;
        
        const values = [employee.id, employee.name, employee.position, employee.email, employee.password.hash, employee.password.salt, employee.adress, employee.nationality, employee.birthDate, employee.education_level, employee.gender, employee.ethnicity, employee.lgbtqi, employee.pcd, employee.neurodiverse, employee.lowIncomeBackground, employee.workModel, employee.hireDate];
    
        try {
            const result = await this.client.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error(`Error updating employee: ${error}`);
            throw error;
        }
    }
    

    // DELETE
    async deleteEmployee(id) {
        try {
            const query = "DELETE FROM employee WHERE id = $1";
            const values = [id];
            const results = await this.client.query(query, values);
            // Retorna o número de linhas afetadas
            return results.rowCount;
        } catch (err) {
            console.error(`Error deleting employee with id ${id}:`, err);
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
    
    async getById(id) {
        try {
            const query = "SELECT * FROM employee WHERE id = $1";
            const values = [id];
            const results = await this.client.query(query, values);
            return results.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByName(name) {
        try {
            const query = "SELECT * FROM employee WHERE name = $1";
            const values = [name];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByPosition(position) {
        try {
            const query = "SELECT * FROM employee WHERE position = $1";
            const values = [position];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByEmail(email) {
        try {
            const query = "SELECT * FROM employee WHERE email = $1";
            const values = [email];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByAdress(adress) {
        try {
            const query = "SELECT * FROM employee WHERE adress = $1";
            const values = [adress];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByNationality(nationality) {
        try {
            const query = "SELECT * FROM employee WHERE nationality = $1";
            const values = [nationality];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByByrthdate(age) {
        try {
            const query = "SELECT * FROM employee WHERE age = $1";
            const values = [age];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByAgeRange(minAge, maxAge) {
        try {
            const currentDate = new Date();
            const minBirthdate = new Date();
            minBirthdate.setFullYear(currentDate.getFullYear() - maxAge - 1);
            const maxBirthdate = new Date();
            maxBirthdate.setFullYear(currentDate.getFullYear() - minAge + 1);
    
            const query = `SELECT * FROM employee WHERE 
                           EXTRACT(YEAR FROM AGE(TIMESTAMP 'now()', birthdate)) BETWEEN $1 AND $2`;
            const values = [minAge, maxAge];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    
    async getByEducationLevel(education_level) {
        try {
            const query = "SELECT * FROM employee WHERE education_level = $1";
            const values = [education_level];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByGender(gender) {
        try {
            const query = "SELECT * FROM employee WHERE gender = $1";
            const values = [gender];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByEthnicity(ethnicity) {
        try {
            const query = "SELECT * FROM employee WHERE ethnicity = $1";
            const values = [ethnicity];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByLgbtqi(lgbtqi) {
        try {
            const query = "SELECT * FROM employee WHERE lgbtqi = $1";
            const values = [lgbtqi];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByPcd(pcd) {
        try {
            const query = "SELECT * FROM employee WHERE pcd = $1";
            const values = [pcd];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    

    async getByNeurodiverse(neurodiverse) {
        try {
            const query = "SELECT * FROM employee WHERE neurodiverse = $1";
            const values = [neurodiverse];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByLowIncomeBackground(lowIncomeBackground) {
        try {
            const query = "SELECT * FROM employee WHERE low_income_background = $1";
            const values = [lowIncomeBackground];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByWorkModel(workModel) {
        try {
            const query = "SELECT * FROM employee WHERE work_model = $1"; //home, presencial
            const values = [workModel];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    
    async getByHireDate(hireDate) {
        try {
            const query = "SELECT * FROM employee WHERE hire_date = $1";
            const values = [hireDate];
            const results = await this.client.query(query, values);
            return results.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

}

module.exports = (client) => new EmployeeService(client);