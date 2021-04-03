const { Router } = require('express');
const router = Router()
const dataMovies = require('./sample.json')

router.get('/', (req, res) => {
    res.json(dataMovies)
})

router.post('/', (req, res) => {
    const {title, director, year, rating} = req.body
    if (title && director && year && rating) {
        const id = dataMovies.length + 1
        const newMocies = {...req.body, id}
        dataMovies.push(newMocies)
        res.json(dataMovies)
    } else {
        res.send('wrong req')
    }

})
module.exports = router