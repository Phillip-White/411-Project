const mongoose = require('mongoose');

const schema = mongoose.Schema;

const partsSchema = new schema({
    _id: { type: String, require: true },
    part: { type: String, require: true },
    desc: { type: String, require: true },
}, {
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
});

const Parts = mongoose.model('Parts', partsSchema);

module.exports = Parts;