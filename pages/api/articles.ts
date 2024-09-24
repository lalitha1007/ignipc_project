import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const result = await pool.query('SELECT * FROM articles');
    res.status(200).json(result.rows);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const result = await pool.query('INSERT INTO articles (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
    res.status(201).json(result.rows[0]);
  }
};
