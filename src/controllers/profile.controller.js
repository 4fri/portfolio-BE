const { User } = require('../models');

const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;  // gunakan id, bukan username

    if (!userId) return res.status(400).json({ message: 'User ID missing in token' });

    const user = await User.findByPk(userId, {
      attributes: ['id', 'username', 'email', 'role', 'createdAt'],
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'Profile data', user });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProfile };
