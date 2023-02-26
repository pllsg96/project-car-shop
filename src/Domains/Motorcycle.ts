import IMotocycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motocycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motoCharacteristics: IMotocycle) {
    super(motoCharacteristics);
    this.category = motoCharacteristics.category;
    this.engineCapacity = motoCharacteristics.engineCapacity;
  }
}

export default Motocycle;