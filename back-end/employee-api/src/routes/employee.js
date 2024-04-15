const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employee");
const { tokenValidated } = require("../middleware/auth"); 

// CREATE

router.post("/new", tokenValidated, employeeController.newEmployee);

router.post("/message", tokenValidated, employeeController.sendMessage);

router.post("/research/:id", tokenValidated, employeeController.sendResearch);

// READ

router.get("/research/:id", employeeController.getResearchById);

router.get("/research", employeeController.getAllResearch);

router.get("/lastResearch", employeeController.getLastResearch);

// UPDATE

router.put("/update", tokenValidated, employeeController.updateEmployee);

// DELETE

router.delete("/delete", tokenValidated, employeeController.deleteEmployee);

// "getBy" OPTIONS

router.get("/getAll", tokenValidated, employeeController.getAll);

router.get("/getById/:id", tokenValidated, employeeController.getById);

router.get("/getByName/:name", tokenValidated, employeeController.getByName);

router.get("/getByPosition/:position", tokenValidated, employeeController.getByPosition);

router.get("/getByEmail/:email", tokenValidated, employeeController.getByEmail);

router.get("/getByAdress/:adress", tokenValidated, employeeController.getByAdress);

router.get("/getByNationality/:nationality", tokenValidated, employeeController.getByNationality);

router.get("/getByAge/:age", tokenValidated, employeeController.getByAge);

router.get("/getByAgeRange/:minAge/:maxAge", tokenValidated, employeeController.getByAgeRange);

router.get("/getByEducationLevel/:educationLevel", tokenValidated, employeeController.getByEducation_level);

router.get("/getByGender/:gender", tokenValidated, employeeController.getByGender);

router.get("/getByEthnicity/:ethnicity", tokenValidated, employeeController.getByEthnicity);

router.get("/getByLgbtqi/:lgbtqi", tokenValidated, employeeController.getByLgbtqi);

router.get("/getByPcd/:pcd", tokenValidated, employeeController.getByPcd);

router.get("/getByNeurodiverse/:neurodiverse", tokenValidated, employeeController.getByNeurodiverse);

router.get("/getByLowIncomeBackground/:lowIncomeBackground", tokenValidated, employeeController.getByLowIncomeBackground);

router.get("/getByWorkModel/:workModel", tokenValidated, employeeController.getByWorkModel); //home, presencial

router.get("/getByHireDate/:hireDate", tokenValidated, employeeController.getByHireDate);
