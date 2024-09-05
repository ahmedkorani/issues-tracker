// routes/issueRoutes.js
const express = require("express");
const issueController = require("../controllers/issueController");

const router = express.Router();

router.post("/issues", issueController.createIssue);
router.get("/issues", issueController.getIssues);
router.get('/issues/:id', issueController.getIssueById);
router.put("/issues/:id", issueController.updateIssue);
router.delete("/issues/:id", issueController.deleteIssue);

module.exports = router;
