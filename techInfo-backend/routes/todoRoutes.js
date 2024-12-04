const express = require('express');
const db = require('../db/db');

const router = express.Router();


router.get('/', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      console.error('Error fetching todos:', err.message);
      return res.status(500).send({ error: 'Database error' });
    }
    res.send(results);
  });
});


router.post('/', (req, res) => {
  let hello = req.body.task;
  const { task } = req.body;
  if (!task) {
      return res.status(400).send({ error: 'Task is required' , message : hello});
  }
  db.query('INSERT INTO todos (task) VALUES (?)', [task], err => {
      if (err) {
          console.error('Error adding task:', err.message);
          return res.status(500).send({ error: 'Database error' });
      }
      res.send({ message: 'Task added!' });
  });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  if (!task) {
    return res.status(400).send({ error: 'Task is required' });
  }
  db.query('UPDATE todos SET task = ? WHERE id = ?', [task, id], err => {
    if (err) {
      console.error('Error updating task:', err.message);
      return res.status(500).send({ error: 'Database error' });
    }
    res.send({ message: 'Task updated!' });
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM todos WHERE id = ?', [id], err => {
    if (err) {
      console.error('Error deleting task:', err.message);
      return res.status(500).send({ error: 'Database error' });
    }
    res.send({ message: 'Task deleted!' });
  });
});

module.exports = router;
