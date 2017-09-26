const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
require("../models/mongo/user");
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done)=> {
    console.log("serializing user : ", user);
    done(null, user.id);
});

passport.deserializeUser(async (id,done)=>{
    const user = await User.findById(id);
    console.log("deserializing user: ", user);
    if(user)
        done(null, user);
    else{
         cone(null, user);
    }
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id})
        if(existingUser){
            console.log("google auth existingUser : ", existingUser);
            return done(null, existingUser);
        }
        const user = await new User({ googleId: profile.id}).save();
        console.log("google auth new user : ", user);
        done(null,user);
    })
);
   

