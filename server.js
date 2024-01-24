const express = require('express')
const bodyParser = require('body-parser')
const serverConfig = require('./configs/server.config')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes/movie.routes')(app);

app.listen(serverConfig.PORT, () => {
    console.log(`Application started on port 3000 ${serverConfig.PORT}`)
})  