const router = require('express').Router();
let Parts = require('./parts.model');

router.route('/').get((req, res) => {
    Parts.find()
        .then(parts => res.json(parts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const part = req.body.part;
    const desc = req.body.desc;

    const newPart = new Parts({
        _id,
        part,
        desc
    });

    newPart.save()
        .then(() => res.json('Part added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;