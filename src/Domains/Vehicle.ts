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
}

export default Vehicle;