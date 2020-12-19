

module.exports = app => {
    const reports = require("../controllers/report.controller");
  
    // Create a new report
    app.post("/report", reports.create);
}