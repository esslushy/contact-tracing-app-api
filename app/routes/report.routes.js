

module.exports = app => {
    const reports = require("../controllers/report.controller");
  
    // Create a new Customer
    app.post("/customers", reports.create);
}