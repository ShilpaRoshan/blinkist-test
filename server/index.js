const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8000;

app.post("/variation", async (request, response) => {
  try {
    const { userId, variation } = request.body;
    console.log(userId, variation, "USER ID BACKEND");
    const result = await db.query(
      "INSERT INTO user_assignment (userId,variation) VALUES($1,$2) RETURNING *",
      [userId, variation]
    );

    response.status(201).json({
      status: "success",
      data: result.rows[0],
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => console.log(`SERVER IS UP! LISTENING ON PORT:${PORT}`));
