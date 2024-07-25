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

const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByUserName('ridvantorun')
      .then(user => {
          req.user = new User(user.name, user.email, user._id);
          next();
      })
      .catch(err => { console.log(err) });
})

// routes
app.use("/admin", adminRoutes);
app.use(userRoutes);
//app.use(accountRoutes);

app.use(errorController.get404Page);

//mongodbserver

mongoConnect(() => {

  User.findByUserName('ridvantorun')
      .then(user => {
          if (!user) {
              user = new User('ridvantorun', 'email@ridvantorun.com');
              return user.save();
          }
          return user;
      })
      .then(user => {
          console.log(user);
          app.listen(3000);
      })
      .catch(err => { console.log(err) });
});

/*mongoConnect(() => {
  app.listen(3000);
});*/

/*app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); */
