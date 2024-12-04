const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const bodyParser = require('body-parser');
const todosRoutes = require('./routes/todoRoutes');

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());



app.use('/todos', todosRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
