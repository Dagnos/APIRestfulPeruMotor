const express = require('express')
const router = express.Router()
const { poolPromise } = require('../db')
const sql = require('mssql')

router.get('/busqueda/:id', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request().query("EXECUTE stp_android_getVehiculo '"+req.params.id+"'")
        res.json(result.recordset)
    }catch (err){
        res.status(500)
        res.send(err.message)
    }
})

router.post('/postvehiculo', async (req, res) => {  
    console.log(req.body)
    try {  
    const pool = await poolPromise  
    const result = await pool.request()  
    .input("IDVEHICULO", sql.VarChar(30), req.body.IDVEHICULO)  
    .input("IDCLIEPROV", sql.Char(11), req.body.IDCLIEPROV)  
    .input("NROMOTOR", sql.VarChar(50), req.body.NROMOTOR)  
    .input("NROCHASIS", sql.VarChar(50), req.body.NROCHASIS)
    .input("IDCOLOR", sql.Char(3), req.body.IDCOLOR)
    .input("IDMARCA", sql.Char(4), req.body.IDMARCA)  
    .input("IDMODELOVEHICULO", sql.Char(20), req.body.IDMODELOVEHICULO) 
    .input("ANIO", sql.Char(4), req.body.ANIO) 
    .input("VIN", sql.VarChar(50), req.body.VIN)
    .input("aniomodelo", sql.Char(4), req.body.aniomodelo)
    .execute("stp_android_postVehiculo").then(function (recordSet) {  
      res.status(200).json({ status: "Success" })  
      })  
    } catch (err) {  
      res.status(500).send(err.message)
    }  
    })

module.exports = router;