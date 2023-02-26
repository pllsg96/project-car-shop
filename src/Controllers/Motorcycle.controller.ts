import { NextFunction, Response, Request } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle.service';

class MotorcycleController {
  public service: MotorcycleService;

  constructor() {
    this.service = new MotorcycleService();
  }

  public async createMotorcycle(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    try {
      const { message, status, result } = await this.service.createMotorcycle(body as IMotorcycle);
      if (message) return res.status(status).json(message);
      return res.status(status).json(result);
    } catch (error) {
      return next(error);
    }
  }
}

export default MotorcycleController;