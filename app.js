const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path"); 

app.set('view engine','pug');
app.set('views','./views');

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/company");
//const accountRoutes = require('./routes/account');

const errorController = require('./controllers/errors');
const mongoConnect = require('./utility/database').mongoConnect;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/admin", adminRoutes);
app.use(userRoutes);
//app.use(accountRoutes);

app.use(errorController.get404Page);

//mongodbserver
mongoConnect(() => {
  app.listen(3000);
});

/*app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); */
