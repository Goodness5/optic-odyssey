import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { walletaddress } = req.body;
    const query = 'SELECT * FROM opticodysseycoverphotos WHERE walletaddress = $1';
    const values = [walletaddress];
   
    //Process the query
    const data = await sql.query(query, values);

    res.status(200).json(data.rows); // Extract rows
    console.log(data.rows); 
  } catch (error) {
    console.error('Error retrieving cover photo data:', error);
    res.status(500).json({ error: 'Error retrieving cover photo data' });
  }
}


