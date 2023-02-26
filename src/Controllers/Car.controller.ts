import { NextFunction, Response, Request } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

class CarController {
  public service: CarService;

  constructor() {
    this.service = new CarService();
  }

  public async createCar(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    try {
      const { message, status, result } = await this.service.createCar(body as ICar);
      if (message) return res.status(status).json(message);
      return res.status(status).json(result);
    } catch (error) {
      return next(error);
    }
  }
}

export default CarController;