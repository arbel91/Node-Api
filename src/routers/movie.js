const { Router } = require('express');
const router = Router()
const movies = require('./sample.json')
const _ = require('underscore')


router.get('/', (req, res) => {
    res.json(movies)
})

router.post('/', (req, res) => {
    const {title, director, year, rating} = req.body
    if (title && director && year && rating) {
        const _id = movies.length + 1
        const newMovies = { _id, ...req.body}
        movies.push(newMovies)
        res.json(movies)
    } else {
        res.send('wrong req')
    }
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(movies, (movie, i) => {
            const _id = movie._id
            if (_id == id) {
                movies.splice(i, 1);
            }
        });
        res.json(movies);
    }
});
module.exports = router