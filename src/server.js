const express = require('express');
const app = express();
const morgan = require('morgan')
const routerHome = require('./routers/home')
const routerMovie = require('./routers/home')
// setings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use(routerHome)
app.use('/api/movies', routerMovie)

// started server 
app.listen(app.get('port'), () => {
    console.log(`sever on port ${app.get('port')}`)
})  