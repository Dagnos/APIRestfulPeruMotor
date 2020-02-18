const express = require('express')
const router = express.Router()
const { poolPromise } = require('../db')
  

router.get('/', async (req, res) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query('EXEC ORDEN_TRABAJO_LIST')      
    res.json(result.recordset)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})
  
router.get('/busqueda/:id', async (req, res) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query("EXECUTE BUSQUEDA_OT '"+req.params.id+"'")      
    res.json(result.recordset)   
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})

// Add a new user
router.post('/users', (request, response) => {
  pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`User added with ID: ${result.insertId}`);
  });
});

module.exports = router;