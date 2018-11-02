const app = require("express")();
var path = require("path");

//view engine setup
app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.set("view engined", "hbs"); //setting view engine as handlebars

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(5000);
