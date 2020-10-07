const router = require('express').Router();
let Arrow = require('../modules/arrow.model');

router.route('/').get((req, res) => {
    Arrow.find()
        .then(arrow => res.json(arrow))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const left = Number(req.body.left);
    const top = Number(req.body.top);
    const rotate = Number(req.body.rotate);

    const newArrow = new Arrow({
        _id,
        left,
        top,
        rotate,
    });

    newArrow.save()
        .then(() => res.json('Arrow added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;