const client = require("../config/config.js");
const employeeService = require("../service/employee.js")(client);
const crypto = require('crypto');


// Authentication
const login = async (req, res) => {
    const PRIVATE_KEY = "your-private-key";
    try {
        const employee = await employeeService.getByEmail(req.body.email);
        
        const inputHash = crypto.pbkdf2Sync(req.body.password, employee.password.salt, 1000, 64, 'sha512').toString('hex');

        if (inputHash === employee.hash) {
            const token = jwt.sign({ employeeId: employee.id }, PRIVATE_KEY, { expiresIn: '30m' });
            res.json({ auth: true, token: token, result: employee });
        } else {
            res.json({ auth: false, token: null });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Invalid email or password.' });
    }
}

module.exports = {
    login
};