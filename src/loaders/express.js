import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api/routes/index.js';


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


export default app;