const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:"*"
}));

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/movies");


const post_route = require('./routes/PostRoutes');
app.use('/api', post_route);

app.listen(8000, function(){
    console.log("server is running");
})