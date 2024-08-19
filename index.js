import express, { json } from 'express'; // Import Express framework and json middleware for parsing JSON requests
import cors from 'cors'; // Import CORS middleware to enable Cross-Origin Resource Sharing
import dotenv from 'dotenv'; // Import dotenv to load environment variables from a .env file
import cookieParser from 'cookie-parser'; // Import cookie-parser to parse cookies in incoming requests
import { dirname, join } from 'path'; // Import path utilities to work with file and directory paths
import { fileURLToPath } from 'url'; // Import utility to convert file URL to file path

dotenv.config(); // Load environment variables from a .env file into process.env

const __dirname = dirname(fileURLToPath(import.meta.url)); // Get the directory name of the current module's file

const app = express(); // Initialize an Express application
const PORT = process.env.PORT || 5001; // Set the port to the value from environment variables or default to 5001
const corsOptions = { credentials: true, origin: process.env.URL || '*' }; // Define CORS options allowing credentials and setting allowed origin

app.use(cors(corsOptions)); // Apply CORS middleware with the specified options
app.use(json()); // Use Express's JSON middleware to parse incoming JSON requests
app.use(cookieParser()); // Use cookie-parser middleware to parse cookies in requests

app.use('/', express.static(join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`); // Start the server and listen on the specified port, logging a message when it's ready
});
