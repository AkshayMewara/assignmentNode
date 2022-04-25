const winston = require("winston");
const { createLogger, format, transports } = require('winston');
// Logger configuration
const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'warn',
            level: 'error',
            level: 'info',
            level: 'debug',
        }),
        new winston.transports.File({
            level: 'warn',
            level: 'error',
            level: 'info',
            level: 'debug',
            // Create the log directory if it does not exist
            filename: 'logs/example.log'
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

module.exports = createLogger({
transports:
    new transports.File({
    filename: 'logs/server.log',
    format:format.combine(
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )}),
});