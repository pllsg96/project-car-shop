import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const motorcycleRouter = Router();

const motorcycleController = new MotorcycleController();

motorcycleRouter.post('/', motorcycleController.createMotorcycle.bind(motorcycleController));

export default motorcycleRouter;