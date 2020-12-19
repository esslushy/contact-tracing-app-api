const Report = require('../models/report.model')

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"})
    };

    // Creat the new report
    const report = new Report({
        dateTested: req.body.dateTested,
        dateReceived: req.body.dateReceived,
        testType: req.body.testType
    })

    // Add report to database
    Report.create(report, (err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the report."
            });
        }
        else res.send(data);
    })
}