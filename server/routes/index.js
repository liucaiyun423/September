module.exports = (app, passport) => {
  require('./auth')(app, passport);
  require('./users')(app);
  require('./billing')(app);
  require('./survey')(app);
}