const router = require('express').Router();
let Parts = require('../modules/parts.model');

router.route('/').get((req, res) => {
    Parts.find()
        .then(parts => res.json(parts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const name = req.body.name;
    const title = req.body.title;
    const left = Number(req.body.left);
    const top = Number(req.body.top);
    const width = Number(req.body.width);
    const height = Number(req.body.height);
    const desc = req.body.desc;

    const newPart = new Parts({
        _id,
        name,
        title,
        left,
        top,
        width,
        height,
        desc,
    });

    newPart.save()
        .then(() => res.json('Part added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;