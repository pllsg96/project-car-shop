import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle.model';

class MotorcycleService {  
  private MotorcycleDomain(motorCycleAfterDomain: IMotorcycle): Motorcycle | null {
    if (motorCycleAfterDomain) {
      return new Motorcycle(motorCycleAfterDomain);
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

  public async findAll() {
    const motorcycleModel = new MotorcycleModel();
    const getAllMotorcycles = await motorcycleModel.findAll();
    const motorcyclesInfo = getAllMotorcycles
      .map((motorcycle) => this.MotorcycleDomain(motorcycle));
    return { status: 200, result: motorcyclesInfo };
  }

  public async findById(id: string) {
    const motorcycleModel = new MotorcycleModel();
    const getMotorcycleById = await motorcycleModel.findById(id);
    const motorcycleInfo = this.MotorcycleDomain(getMotorcycleById as IMotorcycle);
    if (!getMotorcycleById) return { status: 404, message: 'Motorcycle not found' };
    return { status: 200, result: motorcycleInfo };
  }
}

export default MotorcycleService;