import { Test, TestingModule } from '@nestjs/testing';
import { VkmsService } from './vkms.service';

describe('VkmsService', () => {
  let service: VkmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VkmsService],
    }).compile();

    service = module.get<VkmsService>(VkmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
