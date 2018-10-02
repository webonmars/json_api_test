var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema ({
    name: {
        type:       String,
        required:   "Name con not to be blank!"
    },
    completed: {
        type:       Boolean,
        default:    false
    },
    created: {
        type:       Date,
        default:    Date.now
    }
});

// This is the db.collection

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;