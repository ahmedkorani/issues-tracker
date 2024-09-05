const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const issueRoutes = require("./routes/issueRoutes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use("/api", issueRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
