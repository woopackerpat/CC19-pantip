const prisma = require("../configs/prisma");
const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.resgister = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return createError(400, "Email and Password are required");
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return createError(400, "Typeof email and password should be string");
    }

    if (password.length < 8) {
      return createError(
        400,
        "Password length should be at least 8 charactors"
      );
    }

    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (isUserExist) {
      return createError(400, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.json({ message: "Resgister succesful" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return createError(400, "email and password should be provideds");
  }

  if (typeof email !== "string" || typeof password !== "string") {
    return createError(400, "Invalid typeof password or email");
  }
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return createError(400, "User not found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return createError(400, "Email or password is invalid");
  }

  const token = jwt.sign({ id: user.id, text: "Codecamp" }, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.json({ token });
};
