const { noteService } = require('../../services/index');
const createNote = async (req, res) => {
    try {
        const note = await noteService.createNote(req);
        return res.status(200).json({
            success: true,
            message: "Note Created Successfully",
            note
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to Create Note",
            error: err.message,
        });
    }
};
const getNotesById = async (req, res) => {
    try {
        const note = await noteService.getNotesById(req);
        return res.status(200).json({
            success: true,
            message: "Note fetched Successfully",
            note
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch Notes",
            error: err.message,
        });
    }
};
const deleteNotesById = async (req, res) => {
    try {
        const note = await noteService.deleteNotesById(req);
        return res.status(200).json({
            success: true,
            message: "Notes delete Successfully",
            note
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete Notes",
            error: err.message,
        });
    }
};
const UpdateNotesById = async (req, res) => {
    try {
        const note = await noteService.UpdateNotesById(req);
        return res.status(200).json({
            success: true,
            message: "Notes Update Successfully",
            note
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to Update Notes",
            error: err.message,
        });
    }
};
module.exports = {
    createNote,
    getNotesById,
    deleteNotesById,
    UpdateNotesById
};
