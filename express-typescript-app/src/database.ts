import {Pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' })

// The const contains the environment variables
const requiredENV = ['POSTGRES_HOST', 'POSTGRES_USER', 'POSTGRES_PASSWORD', 'POSTGRES_DB', 'POSTGRES_PORT'];
// I itered over the required environment variables and checked if they exist
requiredENV.forEach((varName) => {
    // If the environment variable does not exist, it will throw an error
    if (!process.env[varName]) {
        throw new Error(`Missing environment variable: ${varName}`);
    }
})

// The connection options
const pool: Pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: Number(process.env.POSTGRES_PORT)
})


// Now you can use the connection to interact with your database
const connection_database = async (): Promise<void> => {
    // Define a max attemps that you can try to connect to the database
    const maxAttemps = 3;
    let attempt = 0;

    // While the actually attemp is smaller than the max attemps
    while (attempt < maxAttemps) {
        try {
            await pool.query("SET client_encoding = 'UTF8';");
            await pool.connect();
            console.log('Connected to the database');
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

export { connection_database, pool };