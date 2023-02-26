import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle.model';

class MotorcycleService {  
  private MotorcycleDomain(newMotorcycle: IMotorcycle): Motorcycle | null {
    if (newMotorcycle) {
      return new Motorcycle(newMotorcycle);
    }
    return null;
  }

  public async createMotorcycle(newMotorcycle: IMotorcycle) {
    if (newMotorcycle) {
      const motorcycleModel = new MotorcycleModel();
      const creatingMotorcycle = await motorcycleModel.create(newMotorcycle);
      return { status: 201, result: this.MotorcycleDomain(creatingMotorcycle) };
    }

    return { status: 401, message: 'error' };
  }
}

export default MotorcycleService;