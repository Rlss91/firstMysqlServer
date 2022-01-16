const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const logger = require("morgan");

const usersModel = require("./model/users");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const signupRouter = require("./routes/signup");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sessions({
    secret: "this is mysecret keyword",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    resave: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/bootstrap/css",
  express.static(
    path.join(__dirname, "node_modules", "bootstrap", "dist", "css")
  )
);
app.use(
  "/bootstrap/js",
  express.static(
    path.join(__dirname, "node_modules", "bootstrap", "dist", "js")
  )
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/signup", signupRouter);

app.post("/login", async (req, res) => {
  try {
    let data = await usersModel.selectUsersByEmail(req.body.email);
    console.log(data[0]);
  } catch (err) {
    console.error(err);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
