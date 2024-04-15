const request = require('supertest');
const app = require('../index.js'); 
const employeeService = require("../service/employee.js");

jest.mock("../service/employee.js");

// Mock the newEmployee function
employeeService.newEmployee = jest.fn();

function createEmployee(overrides = {}) {
    const defaultEmployee = {
        // ... rest of the code
    };

    return {...defaultEmployee, ...overrides};
}

describe('Test the newEmployee method', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        employeeService.newEmployee.mockClear();
    });

    test('should create a new employee successfully', async () => {
        const mockEmployee = createEmployee();
        employeeService.newEmployee.mockResolvedValue(mockEmployee);

        const response = await request(app)
            .post('/employee/new') 
            .send(mockEmployee);

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(mockEmployee);
        expect(employeeService.newEmployee).toHaveBeenCalledTimes(1);
        expect(employeeService.newEmployee).toHaveBeenCalledWith(mockEmployee);
    });

    test('should return 500 if there is an error', async () => {
        const mockError = new Error('Error creating new employee');
        employeeService.newEmployee.mockRejectedValue(mockError);

        const response = await request(app)
            .post('/employee/new') 
            .send(createEmployee());

        expect(response.statusCode).toBe(500);
        expect(response.text).toEqual('Error creating new employee');
        expect(employeeService.newEmployee).toHaveBeenCalledTimes(1);
        expect(employeeService.newEmployee).toHaveBeenCalledWith(createEmployee());
    });
});
