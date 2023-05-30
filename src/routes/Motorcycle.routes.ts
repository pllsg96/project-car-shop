import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';
import checkId from '../middlewares/middlewares';

const motorcycleRouter = Router();

const motorcycleController = new MotorcycleController();

motorcycleRouter.post('/', motorcycleController.createMotorcycle.bind(motorcycleController));
motorcycleRouter.get('/', motorcycleController.findAll.bind(motorcycleController));
motorcycleRouter.get('/:id', checkId, motorcycleController.findById.bind(motorcycleController));
motorcycleRouter.put('/:id', checkId, motorcycleController
  .updateMotoById.bind(motorcycleController));
motorcycleRouter.delete('/:id', checkId, motorcycleController
  .deleteMotoById.bind(motorcycleController));

export default motorcycleRouter;