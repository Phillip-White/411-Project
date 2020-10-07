const mongoose = require('mongoose');

const schema = mongoose.Schema;

const partsSchema = new schema({
    _id: { type: String, require: true },
    name: { type: String, require: true },
    title: { type: String, require: true },
    left: { type: Number, require: true },
    top: { type: Number, require: true },
    width: { type: Number, require: true },
    height: { type: Number, require: true },
    desc: { type: String, require: true }    
}, {
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
});

const Parts = mongoose.model('Parts', partsSchema);

module.exports = Parts;