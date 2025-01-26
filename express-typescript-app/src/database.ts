import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' })

// The const contains the environment variables
const requiredENV = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
// I itered over the required environment variables and checked if they exist
requiredENV.forEach((varName) => {
    // If the environment variable does not exist, it will throw an error
    if (!process.env[varName]) {
        throw new Error(`Missing environment variable: ${varName}`);
    }
})

// The connection options
const dbConfig: ConnectionOptions = {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!
}

// Create a connection pool for better performance
const connectionPool = mysql.createPool(dbConfig);

// Now you can use the connection to interact with your database
const connection_database = async (): Promise<void> => {
    // Define a max attemps that you can try to connect to the database
    const maxAttemps = 3;
    let attempt = 0;

    // While the actually attemp is smaller than the max attemps
    while (attempt < maxAttemps) {
        try {
            const connection = await connectionPool.getConnection();
            console.log('Connected to the database');
            connection.release()
            return;
        } catch (err) {
            // If there is an error, increment the attempt
            attempt++
            console.error('Error connecting to database:', err);

            // if the attempt is smaller than the max attemps, wait 1 second and try again
            if (attempt < maxAttemps) {
                console.log(`Retrying connection to database... (${attempt}/ ${maxAttemps})`);
                await new Promise(resolve => setTimeout(resolve, 1000));
            } else {
                console.error('Maximum attempts reached. Exiting.');
                // If the maximum attempts are reached, exit the process
                throw err;
            }
        }
    }
}

export {connectionPool as connection, connection_database}