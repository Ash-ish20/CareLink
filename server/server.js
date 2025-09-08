import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});