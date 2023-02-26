import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carCharacteristics: ICar) {
    super(carCharacteristics);
    this.doorsQty = carCharacteristics.doorsQty;
    this.seatsQty = carCharacteristics.seatsQty;
  }
}

export default Car;