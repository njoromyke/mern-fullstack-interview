const User = require("../models/User");
const { HTTP_STATUS_CODES } = require("../utilities/constants");
const asyncHandler = require("express-async-handler");

// @desc    Auth user
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("Please provide an email and password");
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(HTTP_STATUS_CODES.OK);
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  }

  res.status(HTTP_STATUS_CODES.Bad_Request);
  throw new Error("Invalid email or password");
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("Please provide an email and password");
  }

  const user = await User.findOne({ email });

  if (user) {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    email,
    password,
  });

  if (newUser) {
    res.status(HTTP_STATUS_CODES.Created);
    res.json({
      _id: newUser._id,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  }

  res.status(HTTP_STATUS_CODES.Bad_Request);
  throw new Error("Invalid user data");
});
