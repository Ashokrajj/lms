import db from '@/database/dbconfig'; // Adjust the import path

export default async (req, res) => {
  try {
    // Execute a query using the database connection
    const [rows, fields] = await db.query('SELECT * FROM main');

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

