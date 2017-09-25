const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
require("../models/mongo/user");
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done)=> {done(null, user.id)});

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user=>{done(null, user)});
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }, 
    async (accessToken, refreshToken, profile, done) => {
        console.log("profile : ", profile);
        const existingUser = User.findOne({googleId: profile.id})
        if(existingUser){
            console.log("skip creating new user : ");
            return done(null, existingUser);
        }
        const user = new User({ googleId: profile.id}).save();
        done(null,user);
    })
);
   

