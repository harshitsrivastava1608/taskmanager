const AuthService = require("../services/auth.service");

exports.registerUser = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const result = await AuthService.registerUser(req.body);
    console.log("User registered:", result);
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Error registering user", err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const result = await AuthService.loginUser(req.body);
    console.log("User Logged In:", result);
    if(result)
    res
      .status(200)
      .send({ message: "User LoggedIn successfully", data: result });
    else
    res.status(401).send({ message: "Invalid email or password" });
  } catch (err) {
    res.status(500).send({ message: `Error logging user : ${err}` });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const result = await AuthService.getUserByEmail(req.body.email);
    console.log("User Logged In:", result);
    res
      .status(201)
      .send({ message: "User LoggedIn successfully", data: result });
  } catch (err) {
    res.status(500).send("Error logging user");
  }
};