module.exports = user => {
  const users = require("../controllers/users.controller.js");

  var userroute = express();

  userroute.use("/", (req, res) => {
    res.send("Hello world");
  });
}
