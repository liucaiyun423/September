const Todo = require('../models').Todo;

module.exports = {
  create(req, res) {
    /*All Express route handlers follow this method signature.
    *We can have a third parameter, conventionally named next, 
    *which is a function that passes the request on to the next route handler 
    *(meaning that a route can be handled by multiple route handlers,
    *in which case it's piped or passed along all of those route handlers/
    */
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};