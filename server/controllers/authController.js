import prisma from "../utils/prismaClient.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import  generateTokens from "../utils/token.js";

const register = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    const existingUser = await prisma.User.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.User.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });
    res.status(201).json({
      message: "user registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.User.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "invalid credentials",
      });
    }
    const tokens = generateTokens({
      id: user.id,
      role: user.role,
      email: user.email,
    });
    res.status(200).json({
      message: "login successful",
      user: {
        email: user.email,
        name: user.name,
        role: user.role,
        token: tokens.accessToken,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export default {
  register,
  login,

};
