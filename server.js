const express = require('express')
// require route handlers.
// they will all include the same connection pool
const ordentrabajoRouter = require('./routes/ordentrabajo')
const vehiculoRouter = require('./routes/vehiculo')
const tipoordenRouter = require('./routes/tipoorden')
const monedaRouter = require('./routes/modena')
const tipotrabajoRouter = require('./routes/tipotrabajo')
const sucursalesRouter = require('./routes/sucursales')
const formapagoRouter = require('./routes/formapago')
const asesorRouter = require('./routes/asesor')
const facturaRouter = require('./routes/factura')
const numerootRouter = require('./routes/numeroot')
const cambiofechaRouter = require('./routes/cambiofecha')
const periodoRouter = require('./routes/periodo')
// generic express stuff
const app = express()

// ...rutas 
app.use('/ordentrabajo', ordentrabajoRouter)
app.use('/vehiculo', vehiculoRouter)
app.use('/tipoorden', tipoordenRouter)
app.use('/tipotrabajo', tipotrabajoRouter)
app.use('/moneda', monedaRouter)
app.use('/sucursales', sucursalesRouter)
app.use('/formapago', formapagoRouter)
app.use('/asesor', asesorRouter)
app.use('/factura', facturaRouter)
app.use('/numeroot', numerootRouter)
app.use('/cambiofecha', cambiofechaRouter)
app.use('/periodo', periodoRouter)

app.get("/", function(req, res) {
    res.json({ message: "genial! bienvenido a nuestra api!" });
});

app.use((req, res, next) => {

  // Dominio que tengan acceso (ej. 'http://example.com')
     res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Metodos de solicitud que deseas permitir
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
  // Encabecedados que permites (ej. 'X-Requested-With,content-type')
     res.setHeader('Access-Control-Allow-Headers', '*');
  
  next();
  })

// No need to connect the pool
// Just start the web server

const server = app.listen(process.env.PORT || 3000, () => {
  const host = '10.22.3.29'
  const port = 3000

  console.log(`listening at http://${host}:${port}`)
})