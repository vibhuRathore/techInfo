const express = require('express');
const db = require('../db/db');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const todoList = await db.query('SELECT * FROM todos');
    if (!todoList) {
      return res.status(404).send({
        success: false,
        message: "No task found"
      });
    }
    res.status(200).send({
      success: true,
      message: "List of all todos",
      todoList: todoList[0]
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting the list of ToDos",
      error
    });
  }
});


router.post('/', async (req, res) => {
  try {
    const { task , isCompleted , description } = req.body;
    if (!task) {
        return res.status(500).send({ success : false , error , message : "task is Required"});
        }
    const data = await db.query(`INSERT INTO todos (task , isCompleted , description) VALUES(? , ? , ? )`,[task , isCompleted , description]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error while inserting the data "
      });
    }
    res.status(201).send({
      success: true,
      message: "Successfully Created a item of todos",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating a new item of ToDos",
      error
    });
  }
});

router.put('/:id', async (req, res) => {
  try {    
    const { id } = req.params;
    if (!id) {
        return res.status(500).send({ success : false , error , message : "Invalid Id"});
      }
    const { task , isCompleted , description } = req.body;

    const data = await db.query(`UPDATE todos SET task = ? , isCompleted = ? , description = ? WHERE id = ?`,[task , isCompleted , description , id]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error while Updating the data "
      });
    }
    res.status(201).send({
      success: true,
      message: "Successfully Updated an item of todos",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while Updating a item of ToDos",
      error
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {    
    const { id } = req.params;
    if (!id) {
        return res.status(500).send({ success : false , error , message : "Invalid Id"});
      }
    await db.query(`DELETE from todos WHERE id = ?`,[id]);
    res.status(201).send({
      success: true,
      message: "Successfully Deleted an item of todos",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while Deleting an item of ToDos",
      error
    });
  }
});

module.exports = router;
