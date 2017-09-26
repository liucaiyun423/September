module.exports = (app, passport) => {
    app.get('/auth/google', 
        passport.authenticate('google',{scope: ['profile','email']}));
    app.get('/auth/google/callback',
            passport.authenticate('google'),
            (req, res) => {
                console.log("google auth finished, redirecting");
                res.redirect('/dashboard');
         });
    app.get('/api/current_user', 
        (req,res)=>{console.log("res",res);
            res.send(req.user);
        });
    app.get('/api/logout', (req, res)=>{ 
            req.logout();
            res.redirect('/dashboard');
        });
}