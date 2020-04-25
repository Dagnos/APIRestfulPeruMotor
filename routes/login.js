const express = require('express')
const router = express.Router()
const { poolPromise } = require('../db')
const sql = require('mssql') 



router.post('/singin', async (req, res) => {  
    console.log(req.body)
    try {  
    const pool = await poolPromise  
    const result = await pool.request()  
    .input("USUARIO", sql.NVarChar(30), req.body.USUARIO)  
    .input("PASS", sql.NVarChar(50), req.body.PASS)   
    .execute("stp_android_signIn").then(function (recordSet) {  

        if (req.body[0] == null){
            return res.status(401).json({
                error: true,
                message: 'Username or Password is wrong'

            });
        }

        res.json({
            data: rows
        });
        //res.status(200).json({ status: "Success" })  

      })  
    } catch (err) {  
      res.status(500).send(err.message)
    
    }  
    })
    
module.exports = router;