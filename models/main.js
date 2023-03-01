var mongoose = require('mongoose');
var Schema = mongoose.Schema ;

var showSchema = new Schema({
    t1: {
        type: String,
        required: true
    },
    t2: {
        type:String,
        required:"email is must!"
    },
    t3: {
        type:String,
        required:"enter password"
    },
})
module.exports = mongoose.model("main",showSchema);

