const fs = require('fs');
const path = require('path');

// Set the path for the Logs directory
const logsDirectory = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);

    // Delete the log files
    files.forEach(file => {
        console.log(file);
        fs.unlinkSync(path.join(logsDirectory, file));
    });

    // Remove the Logs folder
    fs.rmdirSync(logsDirectory);
}