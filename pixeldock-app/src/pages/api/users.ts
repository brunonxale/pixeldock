import type { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

// Connection pool using DATABASE_URL from environment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET requests: return all users
  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT id, name, email FROM users ORDER BY id ASC");
      res.status(200).json({ users: result.rows }); // Send users in JSON format
    } catch (err) {
      console.error(err); // Log any DB errors
      res.status(500).json({ error: "Error fetching users" });
    }
  } 
  // Handle POST requests: create a new user
  else if (req.method === "POST") {
    const { name, email } = req.body;
    // Validate request body
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }
    try {
      const result = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email",
        [name, email]
      );
      res.status(201).json(result.rows[0]); // Return the newly created user
    } catch (err) {
      console.error(err); // Log any DB errors
      res.status(500).json({ error: "Error creating user" });
    }
  } 
  // Handle unsupported HTTP methods
  else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
