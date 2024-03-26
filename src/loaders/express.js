import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "express-async-errors";
import routes from '../api/routes/index.js';
import ErrorHandler from '../utils/errorHandler.js';



// Create an instance of Express
const app = express();



// Middleware

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors());




app.use(routes);

// Error handling middleware
app.use((error, req, res, next) => {

    ErrorHandler.handle(error, res);
});
  


export default app;