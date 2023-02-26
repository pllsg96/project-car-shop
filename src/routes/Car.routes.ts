import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carRouter = Router();

const carController = new CarController();

carRouter.post('/', carController.createCar.bind(carController));

export default carRouter;