const AuthService = require("../services/auth.service");

exports.registerUser = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    let resultFromDB=await AuthService.getUserByEmail(req.body.email);
    if(resultFromDB){
      return res.status(400).send({message:"User already exists with this email"})
    }
    const result = await AuthService.registerUser(req.body);
    console.log("User registered:", result.id);
    res.status(201).send({message:"User registered successfully"});
  } catch (err) {
    console.error("Error in registerUser controller:", err);
    res.status(500).send({message:"Error registering user",data: err});
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
    if(result)
    res
      .status(201)
      .send({ message: "User Exists", data: result });
    else
    res.status(404).send({ message: "User does not exist" });
  } catch (err) {
    res.status(500).send("Error checking user");
  }
};