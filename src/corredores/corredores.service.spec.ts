import { Test, TestingModule } from '@nestjs/testing';
import { CorredoresService } from './corredores.service';

describe('CorredoresService', () => {
  let service: CorredoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorredoresService],
    }).compile();

    service = module.get<CorredoresService>(CorredoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
