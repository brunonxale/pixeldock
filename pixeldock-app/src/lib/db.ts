import pkg from "pg";
const { Pool } = pkg;

// Connection pool using environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Helper function for queries
export const query = async <T = any>(text: string, params?: any[]): Promise<T> => {
  try {
    const res = await pool.query(text, params);
    return res.rows as T;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  }
};
