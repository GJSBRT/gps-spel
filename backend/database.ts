import mysql from 'mysql';
import config from './config.json';

const databaseConnection = mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.username,
    password: config.database.password,
    database: config.database.name
});

databaseConnection.connect((err) => {
    if (err) {
        console.error("Database", err)
        throw err
    };
});

console.info("Database", "Connected to database!")

export default databaseConnection;