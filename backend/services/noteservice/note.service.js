const { Note } = require('../../models')
const createNote = async (req) => {
    try {
        console.log(req.body);
        const { userId, title, description, access } = req.body;
        const newNote = new Note({ title, description, userId, access });
        const savedNote = await newNote.save();
        return savedNote;
    } catch (error) {
        return error;
    }
};
const getNotesById = async (req) => {
    try {
        console.log(req.params.id);
        const notes = await Note.find({ userId: req.params.id });
        return notes;
    } catch (error) {
        return error;
    }
};
const deleteNotesById = async (req) => {
    try {
        console.log(req.params.id);
        const notes = await Note.findByIdAndDelete(req.params.id);
        return notes;
    } catch (error) {
        return error;
    }
};

const UpdateNotesById = async (req) => {
    try {
        console.log(req.params.id);
        const updatedData = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, updatedData);
        return updatedNote;
    } catch (error) {
        return error;
    }
};


module.exports = {
    createNote,
    getNotesById,
    deleteNotesById,
    UpdateNotesById
};
