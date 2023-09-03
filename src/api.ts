import express from 'express';
import cors from 'cors';
import { handleCommandOne } from './utils/handleCommandOne';
import { handleCommandTwo } from './utils/handleCommandTwo';
import { handleCommandThree } from './utils/handleCommandThree';
import { logMessagePayload } from './utils/logMessagePayload';
import { handleApiError } from './utils/handleAPIError';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok' });
});

const api = express.Router();

api.get('/healthz', (req, res) => {
  res.status(200).send({ status: 'ok', message: 'Service is healthy' });
});



// API post handler
api.post('/command', async (req, res) => {
  
  try {
    const { message } = req.body;
    logMessagePayload(message)
    if (message.text) {
      const command = message.text.split(' ')[0];
      switch (command) {
        case '/commandOne':
          await handleCommandOne(req, res);
          break;
        case '/commandTwo':
          await handleCommandTwo(req, res);
          break;
        case '/commandThree':
          await handleCommandThree(req, res);
          break;
        default:
          res.status(400).send({ error: 'Invalid command' });
      }
    } else {
      res.status(400).send({ error: 'Invalid message type' });
    }
  } catch (err) {
    handleApiError(err, res);
  }
});

api.get('/status', async (req, res) => {
  try {
    // Add your status check logic here
    res.status(200).send({ status: 'ok', message: 'Service is running' });
  } catch (err) {
    handleApiError(err, res);
  }
});

// Version the api
app.use('/api/v1', api);
