const express = require ('express')
const router = express.Router()
const { poolPromise } = require('../db')

router.get('/', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request().query("exec stp_android_getSucursales")
        res.json(result.recordset)
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

module.exports = router