var mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.Promise =  global.Promise;
// mongoose.connect("mongodb://localhost:27017/todo-api", { useNewUrlParser: true });
// mongoose.connect("mongodb://webonmars:RI578dsa?@ds219983.mlab.com:19983/json_api_test", { useNewUrlParser:true });

var url = "mongodb://ds219983.mlab.com:19983/json_api_test";

mongoose.connect(url, {
    auth: {
      user:'Alex',
      password:'Banzai89'
    },
    useNewUrlParser:true
  }, function(err, client) {
    if (err) {
      console.log(err);
    }
    console.log('connect!!!');
  });


module.exports.Todo = require("./todo");