const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const DiscordStrategy = require("passport-discord").Strategy;
const config = require("./config.js");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "./www"));
app.use(express.static("web"));
app.use("/css", express.static(path.join(__dirname, "./css")));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "YOUR_SECRET_KEY",
    resave: false,
    saveUninitialized: true,
  })
); // Session

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new DiscordStrategy(
    {
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: config.callbackURL,
      scope: config.scopes,
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => done(null, profile));
    }
  )
);

app.get(
  "/auth/oauth2/discord",
  passport.authenticate("discord", { scope: config.scopes }),
  (req, res) => {}
);

app.get(
  "/auth/oauth2/discord/callback",
  passport.authenticate("discord", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get("/logout", (req, res) => {
if(req.user) {
    req.logout(function(error) {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } 
    });
} 
  res.redirect("/");
});

app.get("/", (req, res) => {
  if (req.user) {
    let avatarURL = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;
    let bannerURL;
    if (req.user.banner) {
        bannerURL = `https://cdn.discordapp.com/banners/${req.user.id}/${req.user.banner}.png`;
    } else {
        bannerURL = "https://i.hizliresim.com/6aq61dk.jpg";
    }
    res.render("index", { user: req.user, avatarURL: avatarURL, bannerURL: bannerURL });
  } else {
    res.render("index", { user: req.user });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
