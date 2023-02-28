const mockCreatingMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const mockCreatingMotorcycleResponse = {
  id: '63fe6b566d340cbc00e09dfa',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const mockFindAllMotorcycles = [
  {
    id: '63fe6b566d340cbc00e09dfa',
    model: 'Fazer 250',
    year: 2019,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 250,
  },
  {
    id: '63fe6bba6d340cbc00e09dfc',
    model: 'Yamaha Lander',
    year: 2019,
    color: 'Black',
    status: true,
    buyValue: 21,
    category: 'Street',
    engineCapacity: 250,
  },
];

export {
  mockCreatingMotorcycle,
  mockCreatingMotorcycleResponse,
  mockFindAllMotorcycles,
};