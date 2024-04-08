import "express-async-errors";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api/routes/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import authenticate from '../api/middlewares/authenticate.js';



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

app.use(async (req, res, next) => {

    if (req.path.startsWith("/auth")) {
        
        next(); 
    } else {
        await authenticate(req, res, next);
    }
});


app.use(routes);

// Error handling middleware
app.use((error, req, res, next) => {

    ErrorHandler.handle(error, res);
});
  


export default app;