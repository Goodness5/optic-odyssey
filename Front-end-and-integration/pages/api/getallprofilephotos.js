import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const query = 'SELECT * FROM opticodysseyprofilephotos';
   
    //Process the query
    const data = await sql.query(query);

    res.status(200).json(data.rows); // Extract rows
    console.log(data.rows); 
  } catch (error) {
    console.error('Error retrieving profile pictures data:', error);
    res.status(500).json({ error: 'Error retrieving profiles picture data' });
  }
}


