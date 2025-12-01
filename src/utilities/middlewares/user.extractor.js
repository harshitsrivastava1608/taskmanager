const jwt = require("jsonwebtoken");
exports.extractUser = (req, res, next) => {
  // Assuming user info is in req.headers.authorization as a token
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  // Dummy extraction logic (replace with real token verification)
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token" });
    }
    console.log("Decoded User:", decoded);
    req.userId = decoded.userData; // Attach user info to request object
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
