const AuthService = require("../services/auth.service");
const { successResponse, errorResponse } = require("../utilities/response.messages.");
const logger = require("../utilities/logger");

exports.registerUser = async (req, res) => {
  try {
    logger.info("Request Body:", req.body);
    let resultFromDB=await AuthService.getUserByEmail(req.body.email);
    if(resultFromDB){
      return res.status(400).send({message:"User already exists with this email"})
    }
    const result = await AuthService.registerUser(req.body);
    logger.info("User registered:", result.id);
    successResponse( res, 201, "User registered successfully", { userId: result.id });
  } catch (err) {
    console.error("Error in registerUser controller:", err);
    errorResponse(  res, 500, "Error registering user", [err.message]);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const result = await AuthService.loginUser(req.body);
    logger.info("User Logged In:", result);
    if(result)
      successResponse(  res, 200, "User LoggedIn successfully", result);
    
  } catch (err) {
    errorResponse(  res, 500, "Error logging user in", [err.message]);
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