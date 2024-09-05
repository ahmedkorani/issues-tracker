const Issue = require("../models/issue");

exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    console.log("Created Issue:", issue.toJSON());
    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ error: "Failed to create issue" });
  }
};

exports.getIssues = async (req, res) => {
  try {
    const issues = await Issue.findAll();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch issues" });
  }
};

exports.getIssueById = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id);
    if (issue) {
      res.json(issue);
    } else {
      res.status(404).json({ error: "Issue not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch issue" });
  }
};

exports.updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id);
    if (issue) {
      await issue.update(req.body);
      console.log("Updated Issue:", issue.toJSON());
      res.json(issue);
    } else {
      res.status(404).json({ error: "Issue not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update issue" });
  }
};

exports.deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id);
    if (issue) {
      await issue.destroy();
      console.log("Deleted Issue:", issue.toJSON());
      res.json({ message: "Issue deleted" });
    } else {
      res.status(404).json({ error: "Issue not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete issue" });
  }
};
