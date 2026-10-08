const fs = require('fs');
const path = require('path');

// Set the path for the Logs directory
const logsDirectory = path.join(__dirname, 'Logs');

// Create the folder if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

// Change the working directory to Logs
process.chdir(logsDirectory);

// Create 10 log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;

    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName);
}
