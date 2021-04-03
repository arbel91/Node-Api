const { Router } = require('express');
const router = Router()

router.get('/', (req, res) => {
    const data = {
        "name" : "harold",
        "apellido": "diaz"
    }
    res.json(data)
})

module.exports = router