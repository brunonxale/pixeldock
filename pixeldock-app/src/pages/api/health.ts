import type { NextApiRequest, NextApiResponse } from "next";

// Simple health check endpoint
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Always respond with 200 OK and a message
  res.status(200).json({ status: "ok", message: "Server is running" });
}
