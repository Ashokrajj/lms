import db from '@/database/dbconfig';

const register = async (req, res) => {
    try {
        if (req.method === 'POST') {
              const { name, email, password } = req.body;
            console.log(name, email, password);
            const sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
            const values = [name, email, password];
             db.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Error inserting data: ' + error.message);
                    res.status(500).json({ error: 'Error inserting data' });
                } else {
                    console.log('Data inserted successfully');
                    res.status(200).json({ message: 'Data inserted successfully' });
      }
    });
      }


    // Send a simple acknowledgment response
    res.status(200).json({ message: 'Request received successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ error: 'An error occurred' });
  }
};

export default register;
