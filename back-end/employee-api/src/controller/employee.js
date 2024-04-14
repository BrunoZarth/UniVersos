const client = require("../config/config.js");
const employeeService = require("../service/employee.js")(client);


// CREATE
const newEmployee = async (req, res) => {}
const sendMessage = async (req, res) => {}
const sendResearch = async (req, res) => {}

// READ
const getResearchById = async (req, res) => {}
const getAllResearch = async (req, res) => {}
const getLastResearch = async (req, res) => {}

// UPDATE
const updateEmployee = async (req, res) => {}

// DELETE
const deleteEmployee = async (req, res) => {"mudançassss"}

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
const getById = async (req, res) => {}
const getByName = async (req, res) => {}
const getByPosition = async (req, res) => {}
const getByEmail = async (req, res) => {}
const getByAdress = async (req, res) => {}
const getByNationality = async (req, res) => {}
const getByAge = async (req, res) => {}
const getByAgeRange = async (req, res) => {}
const getByEducationLevel = async (req, res) => {}
const getByGender = async (req, res) => {}
const getByEthnicity = async (req, res) => {}
const getByLgbtqi = async (req, res) => {}
const getByPcd = async (req, res) => {}
const getByNeurodiverse = async (req, res) => {}
const getByLowIncomeBackground = async (req, res) => {}
const getByWorkModel = async (req, res) => {} //home, presencial
const getByHireDate = async (req, res) => {}
