import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "User doesn't have token" });
    }

    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    req.user = verifyToken;
    next();

  } catch (error) {
    console.log("Auth Error:", error.message);
    res.status(500).json({ message: "Authentication failed" });
  }
};

export default isAuth;