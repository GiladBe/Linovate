
import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const { rows } = await pool.query(`select * from products`);
    const { rows } = await pool.query(`SELECT 
  p.*, 
  COALESCE(
    JSON_AGG(r.*) FILTER (WHERE r.product_id IS NOT NULL), 
    '[]'
  ) AS reviews
FROM products p
LEFT JOIN product_reviews r ON p.id = r.product_id
GROUP BY p.id;
`);


    res.status(200).json({ rows });
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}