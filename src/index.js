// import dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
// import routes
import moviesRoute from './routes/MoviesRoute.js';
import seriesRoute from './routes/SeriesRoute.js';
import genreRoute from './routes/GenreRoute.js';
import mylistRoute from './routes/MylistRoute.js';
import ordersRoute from './routes/OrdersRoute.js';
import paymentsRoute from './routes/PaymentsRoute.js';
import packetsRoute from './routes/PacketsRoute.js';
import usersRoute from './routes/UsersRoute.js';
// import middleware
import middlewareLogRequest from './middleware/logRequest.js';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());

app.use('/movies', moviesRoute);
app.use('/series', seriesRoute);
app.use('/genre', genreRoute);
app.use('/mylist', mylistRoute);
app.use('/orders', ordersRoute);
app.use('/payments', paymentsRoute);
app.use('/packets', packetsRoute);
app.use('/users', usersRoute);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

app.use((error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
