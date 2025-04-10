import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';
const postReview = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { productId, review, rating, userId } = req.body;
        if (!productId || !review || !rating ) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
      
            const result = await pool.query(
                `INSERT INTO product_reviews (product_id, review, rating)
                 VALUES ($1, $2, $3)
                 RETURNING *`,
                [productId, review, rating]
              );

            return res.status(200).json({ message: 'Review added successfully',value:result });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default postReview;
