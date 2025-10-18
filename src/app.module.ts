import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VkmsModule } from './vkms/vkms.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [VkmsModule, MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/nest'), AuthModule, UsersModule],
})
export class AppModule {}
