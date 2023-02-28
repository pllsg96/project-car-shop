import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../src/Services/Motorcycle.service';
import {
  mockCreatingMotorcycle,
  mockCreatingMotorcycleResponse,
  mockFindAllMotorcycles,
} from './mocks/motorcycles.mocks';

const { expect } = chai;

describe('Teste da rota Cars', function () {
  describe('Verifica se retorna todas as motos ao requisitar na rota /motorcycles', function () {
    beforeEach(sinon.restore);

    it('Espera retornar o carro criado', async function () {
      const service = new MotorcycleService();
      sinon.stub(Model, 'create').resolves(mockCreatingMotorcycle);
      const chaiHttpResponse = await service.createMotorcycle(mockCreatingMotorcycleResponse);

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.result).to.be.deep.equal(mockCreatingMotorcycleResponse);
    });

    it('Espera retornar todos os carros existentes', async function () {
      const service = new MotorcycleService();
      sinon.stub(Model, 'find').resolves(mockFindAllMotorcycles);
      const chaiHttpResponse = await service.findAll();

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.result).to.be.deep.equal(mockFindAllMotorcycles);
      expect(chaiHttpResponse.result).to.be.length(2);
    });

    it('Espera retornar um carro específico pelo Id', async function () {
      const service = new MotorcycleService();
      sinon.stub(Model, 'findOne').resolves(mockCreatingMotorcycleResponse);
      const chaiHttpResponse = await service.findById('63fe6b566d340cbc00e09dfa');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.result).to.be.deep.equal(mockCreatingMotorcycleResponse);
    });
  });
});