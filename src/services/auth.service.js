const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthModel = require("../model/auth.model");
class AuthService {
  async registerUser(userData) {
    try {
      const { userName, email, password } = userData;
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed Password:", hashedPassword);
      userData.password = hashedPassword;
      
      console.log("Registering user with data:", userData);
      return await AuthModel.create(userData);
    } catch (err) {
      console.error("Error registering user:", err);
    }
  }

  async getUserByEmail(email) {
    try {
      console.log("Fetching user by email:", email);
      let result=await AuthModel.findOne({ where:{email}  })
      console.log("User found:", result);
      return result;
    } catch (err) {
      console.error("Error fetching user by email:", err);
    }
  }

  async loginUser({email, password}) {
    try{
      console.log("Logging in user with email:", email);
    const user = await this.getUserByEmail(email);
    console.log("User fetched from DB:", user);
    if (!user) {
      throw new Error("User not found");
    }
    const userData=user.dataValues
    console.log("User Data:", userData);
    
    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ userData: user }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    return token;
    }catch(err){
        console.error("Error logging in user:", err);
    }
   
  }
}
module.exports = new AuthService();
