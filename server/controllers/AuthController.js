import Users from "../models/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import config from "../config/config";

const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ email: email });
    if (!user) {
      const error = new Error("Cannot found your email");
      error.statusCode = 401;
      throw error;
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      config.jwt_secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: token,
      userId: user._id.toString(),
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

export default {
  login,
};
