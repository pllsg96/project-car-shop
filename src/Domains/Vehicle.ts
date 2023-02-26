import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(
    veiculo: IVehicle,
  ) {
    this.id = veiculo.id;
    this.model = veiculo.model;
    this.year = veiculo.year;
    this.color = veiculo.color;
    this.status = veiculo.status;
    this.buyValue = veiculo.buyValue;
  }

  // public getId() {
  //   return this.id;
  // }
  // public getModel() {
  //   return this.model;
  // }
  // public getYear() {
  //   return this.year;
  // }
  // public getColor() {
  //   return this.color;
  // }
  // public getStatus() {
  //   return this.status;
  // }
  // public getBuyValue() {
  //   return this.buyValue;
  // }

  // public setId(value: string) {
  //   this.id = value;
  // }
  // public setModel(value: string) {
  //   return this.model;
  // }
  // public setYear() {
  //   return this.year;
  // }
  // public setColor() {
  //   return this.color;
  // }
  // public setStatus() {
  //   return this.status;
  // }
  // public setBuyValue() {
  //   return this.buyValue;
  // }
}

export default Vehicle;