const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const secret = 'test';

const register = async (req) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPass,
    });
    const result = await user.save();
    return result;
  } catch (error) {
    return error;
  }
};

const login = async (req) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      throw new Error('Invalid Password');
    }
    const token = jwt.sign({ email: user.email }, secret, {
      expiresIn: '1h',
    });
    const { password: pass, ...rest } = user._doc;
    return { user: rest, token };
  } catch (error) {
    return error;
  }
};

module.exports = { register, login };
