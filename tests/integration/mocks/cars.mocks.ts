const mockCreatingCar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const mockCreatingCarResponse = {
  id: '63fcb9659b7e9942ab2c5b35',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const mockFindAllCars = [
  {
    id: '63fcb7f69b7e9942ab2c5b2f',
    model: 'Opalla',
    year: 1991,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63fcb8779b7e9942ab2c5b31',
    model: 'Omega',
    year: 1998,
    color: 'Red',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

export {
  mockCreatingCar,
  mockCreatingCarResponse,
  mockFindAllCars,
};