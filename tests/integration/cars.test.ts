import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'mongoose';
import {
  mockCreatingCar,
  mockCreatingCarResponse,
  mockFindAllCars,
} from './mocks/cars.mocks';
import CarService from '../../src/Services/Car.service';

const { expect } = chai;

describe('Teste da rota Cars', function () {
  describe('Verifica se retorna todos os carros ao requisitar na rota /cars', function () {
    beforeEach(sinon.restore);

    it('Espera retornar o carro criado', async function () {
      const service = new CarService();
      sinon.stub(Model, 'create').resolves(mockCreatingCarResponse);
      const chaiHttpResponse = await service.createCar(mockCreatingCar);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.result).to.be.deep.equal(mockCreatingCarResponse);
    });

    it('Espera retornar todos os carros existentes', async function () {
      const service = new CarService();
      sinon.stub(Model, 'find').resolves(mockFindAllCars);
      const chaiHttpResponse = await service.findAll();

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.result).to.be.deep.equal(mockFindAllCars);
      expect(chaiHttpResponse.result).to.be.length(2);
    });

    it('Espera retornar um carro específico pelo Id', async function () {
      const service = new CarService();
      sinon.stub(Model, 'findOne').resolves(mockCreatingCarResponse);
      const chaiHttpResponse = await service.findById('63fcb9659b7e9942ab2c5b35');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.result).to.be.deep.equal(mockCreatingCarResponse);
    });
  });
});