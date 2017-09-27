module.exports = (app) => {
    app.post('/api/token', 
       (req,res)=>{console.log("billing token: " ,req.data)});
}