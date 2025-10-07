import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VkmsModule } from './vkms/vkms.module';

@Module({
  imports: [VkmsModule, MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/nest')],
})
export class AppModule {}
