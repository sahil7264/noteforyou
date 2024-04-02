const { AuthService } = require('../../services');

const login = async (req, res) => {
  try {
    const { user, token } = await AuthService.login(req, res);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (token) {d
      res.cookie("token", token, {
        sameSite: "none",
        maxAge: new Date(Date.now() + 3600000),
      });
    }
    return res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      user: { ...user},
      token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const user = await AuthService.register(req, res);
    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: 'User logged out successfully',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  login,
  register,
  logout
}