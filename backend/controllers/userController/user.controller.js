const { userService } = require('../../services/index');
const getAllUsers = async (req, res) => {
    try {
        const note = await userService.getAllUsers(req);
        return res.status(200).json({
            success: true,
            message: "users fetched successfully",
            note
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            error: err.message,
        });
    }
};

module.exports = {
    getAllUsers
};
