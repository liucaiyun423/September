const googleAuthCallback = '/auth/google/callback';
module.exports = (app, passport) => {
    app.get('/auth/google', 
        passport.authenticate('google',{scope: ['profile','email']}));
    app.get(googleAuthCallback,
            passport.authenticate('google'),
            (req, res) => {
                console.log("google callback res ", res);
                res.redirect('/api/current_user');
         });
    app.get('/api/current_user', 
        (req,res)=>{console.log("res",res);
            res.send(req.user)
        });
    app.get('/api/logout', (req, res)=>{ 
            req.logout();
            res.send(req.user)
        });
}