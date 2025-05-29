const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Cari user berdasarkan email atau username yang dikirim
    let user;

    if (email) {
      user = await User.findOne({ where: { email } });
    } else if (username) {
      user = await User.findOne({ where: { username } });
    } else {
      return res.status(400).json({ message: 'Email or username is required' });
    }

    if (!user) return res.status(401).json({ message: 'Invalid email/username or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email/username or password' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};


module.exports = { register, login };
