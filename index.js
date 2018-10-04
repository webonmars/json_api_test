var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override");

var todoRoutes = require("./routes/todos.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SET UP THE LANDING PAGE
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

// app.set("view engine", "ejs");
app.use(methodOverride("_method"));


// app.get('/', (req, res) => res.send('Hello World!'))

app.get("/", function(req, res){
  res.sendFile("index.html");
    // res.render("landing.ejs");
});

app.use("/api/todos", todoRoutes);


app.listen(3000, () => console.log('Server is starting!!!'));
