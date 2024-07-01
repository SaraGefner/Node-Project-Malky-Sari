
import express from 'express';
import connectDB from './utils/database';
import volunteerRoutes from './routs/volenteerRouts';
import helpRequestRoutes from './routs/helpRequestRoutes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json'; 

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/requests', helpRequestRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
