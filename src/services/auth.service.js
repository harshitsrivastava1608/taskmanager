const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthModel = require("../model/auth.model");
class AuthService {
  async registerUser(userData) {
    try {
      const { userName, email, password } = userData;
      const hashedPassword = await bcrypt.hash(password, 10);
      userData.password = hashedPassword;
      return await AuthModel.create(userData);
    } catch (err) {
      console.error("Error registering user:", err);
    }
  }

  async getUserByEmail(email) {
    try {
      let result = await AuthModel.findOne({ where: { email } });
      return result;
    } catch (err) {
      console.error("Error fetching user by email:", err);
    }
  }

  async loginUser({ email, password }) {
    try {
      const user = await this.getUserByEmail(email);

      if (!user) {
        throw new Error("User not found");
      }
      const userData = user.dataValues;

      const isPasswordValid = await bcrypt.compare(password, userData.password);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ userData: user }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return token;
    } catch (err) {
      console.error("Error logging in user:", err);
    }
  }
}
module.exports = new AuthService();
