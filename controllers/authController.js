const User = require('../models/User');
const jwt = require('jsonwebtoken');
// generate JWT Token
const createToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h'}
  );
};
// @desc   Register a new user
exports.register = async (req, res) => {
  try { const { name, email, accountType, password } = req.body;
  if (!name || !password)
    return res.status(400).json({ message: 'email and password required'
  });
  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json ({ message: 'email already taken' });
  const user = await User.create({ name, email, accountType, password });
  res.status(201).json({
   _id: user._id,
   name: user.name,
   email:user.email,
   role: user.role,
   accountType: user.accountType,
   balance: user.balance,
   token: createToken(user) 
  });
 } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @dec Login user
  exports.login = async (req, res) => {
  try { const { email, password } = req.body;
 
  const user  = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password)))
    return res.status(400).json ({ message: 'Invalid credentials' });

  res.json({
   _id: user._id,
   name: user.name,
   email: user.email,
   role: user.role,
   accountType: user.accountType,
   balance: user.balance,
   token: createToken(user) 
  });
} catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get user profile (protected)
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};