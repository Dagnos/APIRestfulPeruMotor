const express = require('express')
const router = express.Router()
const { poolPromise } = require('../db')
const sql = require('mssql') 
  

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

router.post('/postusuario', async (req, res) => {  
  console.log(req.body)
  try {  
  const pool = await poolPromise  
  const result = await pool.request()  
  .input("USUARIO", sql.VarChar(50), req.body.USUARIO)  
  .input("SERIE", sql.VarChar(50), req.body.SERIE)  
  .input("IDRESPONSABLE", sql.VarChar(50), req.body.IDRESPONSABLE)  
  .input("SUCURSAL", sql.VarChar(50), req.body.SUCURSAL)
  .input("PASS", sql.VarChar(50), req.body.PASS)  
  .execute("stp_android_postUsuario").then(function (recordSet) {  
    res.status(200).json({ status: "Success" })  
    })  
  } catch (err) {  
    res.status(500).send(err.message)
  }  
  })

module.exports = router;