import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Ensure the request is a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Only POST requests are allowed.' });
  }

  try {
    const { coverphoto, walletaddress } = req.body;

    // Validate the input
    if (!coverphoto || !walletaddress) {
      return res.status(400).json({ error: 'Profile photo and wallet address are required.' });
    }

    // Check if the address does not exist
    const addressCheckQuery = 'SELECT * FROM opticodysseycoverphotos WHERE walletaddress = $1';
    const addressCheckResult = await sql.query(addressCheckQuery, [walletaddress]);

    if (addressCheckResult.rows.length === 0) {
      // Insert new user if address does not exist
      const insertQuery = 'INSERT INTO opticodysseycoverphotos (walletaddress, coverphoto) VALUES ($1, $2)';
      await sql.query(insertQuery, [walletaddress, coverphoto]);
      return res.status(201).json({ message: 'User created and profile photo added successfully.' });
    }

    // If the address is in the database, proceed to update data for profile photo
    const updateQuery = 'UPDATE opticodysseycoverphotos SET coverphoto = $1 WHERE walletaddress = $2';
    const values = [coverphoto, walletaddress];

    console.log('SQL Query:', updateQuery);
    console.log('Values:', values);

    await sql.query(updateQuery, values);

    res.status(200).json({ message: 'Profile photo updated successfully.' });
    console.log('Profile updated successfully');
  } catch (error) {
    console.error('Error updating profile photo:', error);
    res.status(500).json({ error: 'Error updating profile photo', details: error.message });
  }
}
