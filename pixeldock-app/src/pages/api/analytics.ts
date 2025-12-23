import type { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

// Create a database connection using the environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Our analytics endpoint
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests, return 405 for anything else
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} not allowed`);
  }
  try {
    // Query to count all users
    const result = await pool.query("SELECT COUNT(*) AS total_users FROM users");

    // Respond with the total number of users
    res.status(200).json({ totalUsers: parseInt(result.rows[0].total_users) });
  } catch (err) {
    // Log any error and respond with 500
    console.error(err);
    res.status(500).json({ error: "Error generating analytics" });
  }
}
