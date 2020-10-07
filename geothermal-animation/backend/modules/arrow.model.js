const mongoose = require('mongoose');

const schema = mongoose.Schema;

const arrowSchema = new schema({
    _id: { type: String, require: true },
    left: { type: Number, require: true },
    top: { type: Number, require: true },
    rotate: { type: Number, require: true },
}, {
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
});

const Arrow = mongoose.model('Arrow', arrowSchema);

module.exports = Arrow;