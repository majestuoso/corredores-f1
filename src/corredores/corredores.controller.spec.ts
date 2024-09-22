import { Test, TestingModule } from '@nestjs/testing';
import { CorredoresController } from './corredores.controller';

describe('CorredoresController', () => {
  let controller: CorredoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorredoresController],
    }).compile();

    controller = module.get<CorredoresController>(CorredoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
