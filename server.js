const express = require('express');
require('./config/config');
const cors = require('cors');

require('dotenv').config();


const app = express();
const userRouter = require('./routers/userRouter')
const statusRouter = require('./routers/statusRouter')
const taskRouter = require('./routers/taskRouter')
const subtaskRouter = require('./routers/subtaskRouter')

app.use(cors());
app.use(express.json());

app.use('/api/v1', userRouter)
app.use('/api/v1', statusRouter)
app.use('/api/v1', taskRouter)
app.use('/api/v1', subtaskRouter)

const port = process.env.port;


app.listen(port, () =>{
    console.log(`This server is listening on port: ${port}`);
})