import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.model';

class CarService {  
  private createCarDomain(newCar: ICar): Car | null {
    if (newCar) {
      return new Car(newCar);
    }
    return null;
  }

  public async createCar(newCar: ICar) {
    if (newCar) {
      const carModel = new CarModel();
      const creatingCar = await carModel.create(newCar);
      return { status: 201, result: this.createCarDomain(creatingCar) };
    }

    return { status: 401, message: 'error' };
  }
}

export default CarService;