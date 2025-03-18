import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express(); //whole app lies in this variable app
const PORT = 5000; //port of application

app.use(bodyParser.json()); //initialize bodyparser middleware, this will say that we are using json data for our application

app.use('/users', usersRoutes); //starting path for all the routes

app.get('/', (req, res) => res.send('Hello from Homepage')); // 1st route/root page

app.listen(PORT, () => console.log(`Server running on port: http:localhost:${PORT}`)); //listen for incoming request


//BASIC EXPRESS SERVER ^^