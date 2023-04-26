import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.model';

class CarService {  
  private carDomain(carAfterDomain: ICar): Car | null {
    if (carAfterDomain) {
      return new Car(carAfterDomain);
    }
    return null;
  }

  public async createCar(newCar: ICar) {
    if (newCar) {
      const carModel = new CarModel();
      const creatingCar = await carModel.create(newCar);
      return { status: 201, result: this.carDomain(creatingCar) };
    }

    return { status: 401, message: 'error' };
  }

  public async findAll() {
    const carModel = new CarModel();
    const getAllCars = await carModel.findAll();
    const carsInfo = getAllCars.map((car) => this.carDomain(car));
    return { status: 200, result: carsInfo };
  }

  public async findById(id: string) {
    const carModel = new CarModel();
    const getCarById = await carModel.findById(id);
    const carInfo = this.carDomain(getCarById as ICar);
    if (!getCarById) return { status: 404, message: 'Car not found' };
    return { status: 200, result: carInfo };
  }

  public async updateCarById(id: string, carInfo: ICar) {
    const carModel = new CarModel();
    const getByIdAndUpdate = await carModel.updateById(id, carInfo);
    if (!getByIdAndUpdate) return { status: 404, message: 'Car not found' };
    const updatedCarInfo = this.carDomain(getByIdAndUpdate as ICar);
    return { status: 200, result: updatedCarInfo };
  }
}

export default CarService;