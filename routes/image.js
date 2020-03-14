const express = require('express')
const app = express()
const sql = require('mssql') 
const router = express.Router()
var fs = require('fs')

router.post('/upload', function(req, res, next) {
    console.log(req.body.image)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'1_'+num+'.JPEG',img); 
             console.log(num)  
             res.send({
                success: true,
                message: "File uploaded!"})  
        }else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})

router.post('/upload2', function(req, res, next) {
    console.log(req.body.image)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'2_'+num+'.JPEG',img); 
             console.log(num)  
             res.send({
                success: true,
                message: "File uploaded!"})  
        }else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})

router.post('/upload3', function(req, res, next) {
    console.log(req.body.image)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'3_'+num+'.JPEG',img); 
             console.log(num)
             res.send({
                success: true,
                message: "File uploaded!"})    
        }else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})

router.post('/upload4', function(req, res, next) {
    console.log(req.body.image)
    console.log(4)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'4_'+num+'.JPEG',img); 
             console.log(num) 
             res.send({
                success: true,
                message: "File uploaded!"})   
        }else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})

router.post('/upload5', function(req, res, next) {
    console.log(req.body.image)
    console.log(5)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'5_'+num+'.JPEG',img); 
             console.log(num)  
             res.send({
                success: true,
                message: "File uploaded!"})  
        }else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})

router.post('/upload6', function(req, res, next) {
    console.log(req.body.image)
    console.log(6)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'6_'+num+'.JPEG',img); 
             console.log(num) 
             res.send({
                success: true,
                message: "File uploaded!"
        })   
        }else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})

router.post('/upload7', function(req, res, next) {
    console.log(req.body.image)
    console.log(6)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'7_'+num+'.JPEG',img); 
             console.log(num)
             res.send({
                success: true,
                message: "File uploaded!"})    
              } else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})
router.post('/uploadfirma', function(req, res, next) {
    console.log(req.body.image)
    console.log(6)
        if(req.body.image){ 
            var num = req.body.num
            var img = Buffer.from(req.body.image, 'base64');    
             fs.writeFileSync("./uploads/"+'firma_'+num+'.JPEG',img); 
             console.log(num)
             res.send({
                success: true,
                message: "File uploaded!"})    
        }else{
            var file = req.files.image
            file.mv("./uploads/"+file.name,  function (err, result) {
            if (err)
                throw err;
            res.send({
                    success: true,
                    message: "File uploaded!"
            })
        }) 
        }
})
module.exports = router;
