import express from 'express';
import { json } from 'body-parser';
import 'reflect-metadata';
import DrugsController from './service-layer/controllers/DrugsController';

const app = express();
const port = 3001;

app.use(json());

const drugsController = new DrugsController();

drugsController.mount(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
