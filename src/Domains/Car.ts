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

  // public getDoorsQty() {
  //   return this.doorsQty;
  // }
  // public getSeatsQty() {
  //   return this.seatsQty;  
  // }

  // public setDoorsQty(value: number): void {
  //   this.doorsQty = value;
  // }
  // public setSeatsQty(value: number): void {
  //   this.seatsQty = value;
  // }
}

export default Car;