import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe, HttpException, UseGuards,
} from '@nestjs/common';
import { VkmsService } from './vkms.service';
import { CreateVkmDto } from './dto/create-vkm.dto';
import { UpdateVkmDto } from './dto/update-vkm.dto';
import mongoose from 'mongoose';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('vkms')
export class VkmsController {
  constructor(private readonly vkmsService: VkmsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  // @UseGuards(JwtAuthGuard)
  create(@Body() createVkmDto: CreateVkmDto) {
    return this.vkmsService.create(createVkmDto);
  }

  @Get()
  findAll() {
    return this.vkmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid)  throw new HttpException("Invalid ID", 400);

    return this.vkmsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVkmDto: UpdateVkmDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid)  throw new HttpException("Invalid ID", 400);

    return this.vkmsService.update(id, updateVkmDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid)  throw new HttpException("Invalid ID", 400);

    return this.vkmsService.remove(id);
  }
}
