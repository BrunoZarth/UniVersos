const client = require("../config/config.js");
const employeeService = require("../service/employee.js")(client);


// CREATE
const newEmployee = async (req, res) => {
    try {
        const employeeData = req.body;

        const newEmployee = await employeeService.newEmployee(employeeData);

        res.status(201).json(newEmployee);
    } catch (error) {
        console.error(`Error creating new employee: ${error}`);
        res.status(500).send('Error creating new employee');
    }
}

const sendMessage = async (req, res) => {
    try {
        const message = await employeeService.sendMessage(req.body);
        res.status(200).json(message);
    } catch (error) {
        console.error(`Error sending message: ${error}`);
        res.status(500).send('Error sending message');
    }
}

const sendResearch = async (req, res) => {
    try {
        const research = await employeeService.sendResearch(req.body);
        res.status(200).json(research);
    } catch (error) {
        console.error(`Error sending research: ${error}`);
        res.status(500).send('Error sending research');
    }
}

// READ
const getResearchById = async (req, res) => {
    try {
        const research = await employeeService.getResearchById(req.params.id);
        res.status(200).json(research);
    } catch (error) {
        console.error(`Error getting research by id: ${error}`);
        res.status(500).send('Error getting research by id');
    }
}

const getAllResearch = async (req, res) => {
    try {
        const research = await employeeService.getAllResearch();
        res.status(200).json(research);
    } catch (error) {
        console.error(`Error getting all research: ${error}`);
        res.status(500).send('Error getting all research');
    }
}

const getLastResearch = async (req, res) => {
    try {
        const research = await employeeService.getLastResearch();
        res.status(200).json(research);
    } catch (error) {
        console.error(`Error getting last research: ${error}`);
        res.status(500).send('Error getting last research');
    }
}

// UPDATE
const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await employeeService.updateEmployee(req.body);
        res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error(`Error updating employee: ${error}`);
        res.status(500).send('Error updating employee');
    }
}

// DELETE
const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await employeeService.deleteEmployee(req.params.id);
        res.status(200).json(deletedEmployee);
    } catch (error) {
        console.error(`Error deleting employee: ${error}`);
        res.status(500).send('Error deleting employee');
    }
}


// "getBy" OPTIONS
const getAll = async (req, res) => {
    try {
        const results = await employeeService.getAll();
        if (results.length === 0) {
            res.status(404).json({ message: 'No employee found' });
        } else {
            res.status(200).json(results);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while getting employees' });
    }
}

const getById = async (req, res) => {
    try {
        const employee = await employeeService.getById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        console.error(`Error getting employee by id: ${error}`);
        res.status(500).send('Error getting employee by id');
    }
}

const getByName = async (req, res) => {
    try {
        const employees = await employeeService.getByName(req.params.name);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by name: ${error}`);
        res.status(500).send('Error getting employees by name');
    }
}

const getByPosition = async (req, res) => {
    try {
        const employees = await employeeService.getByPosition(req.params.position);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by position: ${error}`);
        res.status(500).send('Error getting employees by position');
    }
}

const getByEmail = async (req, res) => {
    try {
        const employee = await employeeService.getByEmail(req.params.email);
        res.status(200).json(employee);
    } catch (error) {
        console.error(`Error getting employee by email: ${error}`);
        res.status(500).send('Error getting employee by email');
    }
}

const getByAdress = async (req, res) => {
    try {
        const employees = await employeeService.getByAdress(req.params.adress);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by adress: ${error}`);
        res.status(500).send('Error getting employees by adress');
    }
}

const getByNationality = async (req, res) => {
    try {
        const employees = await employeeService.getByNationality(req.params.nationality);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by nationality: ${error}`);
        res.status(500).send('Error getting employees by nationality');
    }
}

const getByBirthdate = async (req, res) => {
    try {
        const employees = await employeeService.getByBirthdate(req.params.birthdate);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by birthdate: ${error}`);
        res.status(500).send('Error getting employees by birthdate');
    }
}

const getByAgeRange = async (req, res) => {
    try {
        const employees = await employeeService.getByAgeRange(req.params.ageRange);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by age range: ${error}`);
        res.status(500).send('Error getting employees by age range');
    }
}

const getByEducationLevel = async (req, res) => {
    try {
        const employees = await employeeService.getByEducationLevel(req.params.educationLevel);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by education level: ${error}`);
        res.status(500).send('Error getting employees by education level');
    }
}

const getByGender = async (req, res) => {
    try {
        const employees = await employeeService.getByGender(req.params.gender);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by gender: ${error}`);
        res.status(500).send('Error getting employees by gender');
    }
}

const getByEthnicity = async (req, res) => {
    try {
        const employees = await employeeService.getByEthnicity(req.params.ethnicity);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by ethnicity: ${error}`);
        res.status(500).send('Error getting employees by ethnicity');
    }
}

const getByLgbtqi = async (req, res) => {
    try {
        const employees = await employeeService.getByLgbtqi(req.params.lgbtqi);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by lgbtqi: ${error}`);
        res.status(500).send('Error getting employees by lgbtqi');
    }
}

const getByPcd = async (req, res) => {
    try {
        const employees = await employeeService.getByPcd(req.params.pcd);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by pcd: ${error}`);
        res.status(500).send('Error getting employees by pcd');
    }
}

const getByNeurodiverse = async (req, res) => {
    try {
        const employees = await employeeService.getByNeurodiverse(req.params.neurodiverse);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by neurodiverse: ${error}`);
        res.status(500).send('Error getting employees by neurodiverse');
    }
}

const getByLowIncomeBackground = async (req, res) => {
    try {
        const employees = await employeeService.getByLowIncomeBackground(req.params.lowIncomeBackground);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by low income background: ${error}`);
        res.status(500).send('Error getting employees by low income background');
    }
}

const getByWorkModel = async (req, res) => {
    try {
        const employees = await employeeService.getByWorkModel(req.params.workModel);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by work model: ${error}`);
        res.status(500).send('Error getting employees by work model');
    }
}

const getByHireDate = async (req, res) => {
    try {
        const employees = await employeeService.getByHireDate(req.params.hireDate);
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error getting employees by hire date: ${error}`);
        res.status(500).send('Error getting employees by hire date');
    }
}

module.exports = {
    newEmployee,
    sendMessage,
    sendResearch,
    getResearchById,
    getAllResearch,
    getLastResearch,
    updateEmployee,
    deleteEmployee,
    getAll,
    getById,
    getByName,
    getByPosition,
    getByEmail,
    getByAdress,
    getByNationality,
    getByBirthdate,
    getByAgeRange,
    getByEducationLevel,
    getByGender,
    getByEthnicity,
    getByLgbtqi,
    getByPcd,
    getByNeurodiverse,
    getByLowIncomeBackground,
    getByWorkModel,
    getByHireDate
};

