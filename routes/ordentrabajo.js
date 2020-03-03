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
    res.status(500).send(err.message)
  }
})
  
router.get('/busqueda/:id', async (req, res) => {
  try {
    const pool = await poolPromise
    const result = await pool.request().query("stp_android_getBusquedaOt '"+req.params.id+"'")      
    res.json(result.recordset)   
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post('/postordentrabajo', async (req, res) => {
  console.log(req.body)
  try { 
    var periodo = req.body.periodo
    var idsucursal = req.body.idsucursal
    var fechainicio = req.body.fechainicio
    var idmoneda = req.body.idmoneda
    var idresponsable = req.body.idresponsable
    var serie = req.body.serie
    var tcambio = req.body.tcambio
    var idclieprov = req.body.idclieprov
    var idvehiculo = req.body.idvehiculo
    var kilometraje = req.body.kilometraje
    var idfpago = req.body.idfpago
    var idactividad = req.body.idactividad
    var garantia = req.body.garantia
    var idpropietario = req.body.idpropietario

    const miXml = `<ordenproduccion>
<idempresa>001</idempresa>
<idordenpro></idordenpro>
<idordenproduc></idordenproduc>
<idemisor>001</idemisor>
<periodo>${periodo}</periodo>
<idsucursal>${idsucursal}</idsucursal>
<idproducto>SERVICIO</idproducto>
<fechainicio>${fechainicio}</fechainicio>
<fechafinal>${fechainicio}</fechafinal>
<idmoneda>${idmoneda}</idmoneda>
<idresponsable>${idresponsable}</idresponsable>
<iddocumento>OTR</iddocumento>
<serie>${serie}</serie>
<numero></numero>
<fecha>${fechainicio}</fecha>
<tcambio>${tcambio}</tcambio>
<tcmoneda>1.000000</tcmoneda>
<idclieprov>${idclieprov}</idclieprov>
<idvehiculo>${idvehiculo}</idvehiculo>
<kilometraje>${kilometraje}</kilometraje>
<idfpago>${idfpago}</idfpago>
<idactividad>${idactividad}</idactividad>
<garantia>${garantia}</garantia>
<idpropietario>${idpropietario}</idpropietario>
<ventana>EDT_ORDENMANTENIMIENTO</ventana>
<idestado>PE</idestado>
</ordenproduccion>`;

    const pool = await poolPromise
    const result = await pool.request()
    .input("lcEmpresa",req.body.lcEmpresa)
    .input("xmlData", miXml)
    .execute("ordenmantenimiento_grabarxml_service").then(function (recordSet) {  
      console.log.json({ status: "Success" })  
      })  
  }catch (err) {
    res.status(500).send(err.message)
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