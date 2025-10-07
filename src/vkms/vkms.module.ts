import { Module } from '@nestjs/common';
import { VkmsService } from './vkms.service';
import { VkmsController } from './vkms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vkm, VkmSchema } from './entities/vkm.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Vkm.name,
      schema: VkmSchema
    }])
  ],
  controllers: [VkmsController],
  providers: [VkmsService],
})
export class VkmsModule {}
