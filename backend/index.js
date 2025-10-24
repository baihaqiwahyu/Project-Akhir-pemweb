const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');  // <-- panggil koneksi database

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Server running!'));

// contoh route booking
app.post('/booking', (req, res) => {
    const { nama, hp, layanan_id, tanggal, jam } = req.body;
    const sql = `INSERT INTO booking (nama, hp, layanan_id, tanggal, jam) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [nama, hp, layanan_id, tanggal, jam], (err, result) => {
        if(err) return res.status(500).json({ error: err });
        res.json({ message: 'Booking berhasil!' });
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));
