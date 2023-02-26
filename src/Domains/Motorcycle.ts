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

  public getCategory() {
    return this.category;
  }
  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setCategory(value: string): void {
    this.category = value;
  }
  public setEngineCapacity(value: number): void {
    this.engineCapacity = value;
  }
}

export default Motocycle;