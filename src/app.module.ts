import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VkmsModule } from './vkms/vkms.module';

@Module({
  imports: [VkmsModule, MongooseModule.forRoot('mongodb+srv://rvanleeuwerden_db_user:jnrEsTeu5UYC39o1@avans.pksgofw.mongodb.net/lu2-db')],
})
export class AppModule {}
