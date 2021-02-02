const User = require('../models/user.model.js');

exports.findAll = (req, res) => {
  res.send("Bonobo");
  // User.find()
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving tutorials."
  //     });
  //   });
};
