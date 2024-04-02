const express = require('express');
const router = express.Router();
const { notesController } = require('../../controllers/index')

router.route("/create")
    .post(notesController.createNote)
router.route("/:id").get(notesController.getNotesById);
router.route("/:id").delete(notesController.deleteNotesById);
router.route("/:id").put(notesController.UpdateNotesById);
module.exports = router;