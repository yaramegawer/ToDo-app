const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/connect');
const ejs = require('ejs');
const taskRoutes = require('./routes/taskRoutes');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const ToDo=require('./models/todoModel');

connectDB();
app.use('/api/ToDo', taskRoutes);



app.get('/',async (req, res) => {
    try {
        const tasks = await ToDo.find();  // Fetch all tasks from the database
        res.render('index', { task: tasks });  // Pass tasks to the EJS template
    } catch (err) {
        console.log(err, "Error fetching tasks");
        res.status(500).send("Error fetching tasks");
    }
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
