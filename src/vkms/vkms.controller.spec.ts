import { Test, TestingModule } from '@nestjs/testing';
import { VkmsController } from './vkms.controller';
import { VkmsService } from './vkms.service';

describe('VkmsController', () => {
  let controller: VkmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VkmsController],
      providers: [VkmsService],
    }).compile();

    controller = module.get<VkmsController>(VkmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
