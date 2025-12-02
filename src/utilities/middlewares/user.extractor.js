const jwt = require("jsonwebtoken");
exports.extractUser = (req, res, next) => {
 
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
 
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token" });
    }
    console.log("Decoded User:", decoded);
    req.userId = decoded.userData;
    next();
  });
};
exports.verifyUser = (req, res, next) => {
  const { userId: userIdFromToken } = req;
  const { userId } = req.body;
  if(userIdFromToken !== userId){
    return res.status(403).send({ message: "Forbidden: User ID mismatch" });
  }
  next()
};
