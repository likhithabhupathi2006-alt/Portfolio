require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.error('MongoDB error:', e.message));

const Message = mongoose.model('Message', new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
}, { timestamps: true }));

app.get('/', (req, res) => res.send('Portfolio API running'));

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email))
    return res.status(400).json({ error: 'Please fill all fields with a valid email.' });
  try {
    await Message.create({ name, email, message });
    res.status(201).json({ success: true });
  } catch (e) { res.status(500).json({ error: 'Server error' }); }
});

const file = (n) => path.join(__dirname, 'files', n);
app.get('/api/resume/pdf', (req, res) => res.download(file('Likhitha_Resume.pdf')));
app.get('/api/resume/docx', (req, res) => res.download(file('Likhitha_Resume.docx')));

app.listen(process.env.PORT || 5000, () => console.log('Server running'));
