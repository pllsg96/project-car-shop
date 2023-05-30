import { Router } from 'express';
import CarController from '../Controllers/Car.controller';
import checkId from '../middlewares/middlewares';

const carRouter = Router();

const carController = new CarController();

carRouter.post('/', carController.createCar.bind(carController));
carRouter.get('/', carController.findAll.bind(carController));
carRouter.get('/:id', checkId, carController.findById.bind(carController));
carRouter.put('/:id', checkId, carController.updateCarById.bind(carController));
carRouter.delete('/:id', checkId, carController.deleteCarById.bind(carController));

export default carRouter;