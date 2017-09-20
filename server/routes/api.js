const controllers = require('../controllers');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/todos', controllers.todos.create);
  app.post('/api/todos', controllers.todos.create);
}