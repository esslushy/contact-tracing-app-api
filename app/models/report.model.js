const sql = require("./db");

// constructor
const Report = function(report) {
    this.dateTested = report.dateTested;
    this.dateReceived = report.dateReceived;
    this.testType = report.testType;
};

Report.create = (newReport, result) => {
    sql.query(`INSERT INTO reports (testDate, testReceived, testType) VALUES(date(${newReport.dateTested}), date(${newReport.dateReceived}), ${newReport.testType});`,
    (err, res) => {
        // If error exists report it
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        // Else report success
        console.log("Created report: ", newReport)
        result(null, newReport)
    })
}