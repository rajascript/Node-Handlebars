const app = require("express")();
var path = require("path");

//view engine setup
app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars

app.get("/", (req, res) => {
	let peopleList = getRandomList();
	res.render("index", { people: peopleList }); //passing list of people to our index.hbs file.
});
let getRandomList = () => {
	let list = ["ada", "turing", "lovelace", "neumann", "gracehopper"];
	let limit = Math.floor(Math.random() * (list.length - 1 - 0) + 0); //generating random number between 0 & 4
	return list.slice(limit);
};
app.listen(5000);
