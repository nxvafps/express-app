import pool from "./config/db.js";

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Connection successful:", result.rows);
  } catch (err) {
    console.error("Connection failed:", err);
  } finally {
    pool.end(); // Close the pool to end the script
  }
}

testConnection();
