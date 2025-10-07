import { Injectable } from '@nestjs/common';
import { CreateVkmDto } from './dto/create-vkm.dto';
import { UpdateVkmDto } from './dto/update-vkm.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vkm } from './entities/vkm.entity';
import { Model } from 'mongoose';

@Injectable()
export class VkmsService {
  constructor(@InjectModel(Vkm.name) private vkmModel: Model<Vkm>) {}

  create(createVkmDto: CreateVkmDto) {
    const createdVkm = new this.vkmModel(createVkmDto);
    return createdVkm.save();
  }

  findAll() {
    return this.vkmModel.find();
  }

  findOne(id: string) {
    return this.vkmModel.findOne({ _id: id });
  }

  update(id: string, updateVkmDto: UpdateVkmDto) {
    return this.vkmModel.findByIdAndUpdate(id, updateVkmDto, { new: true });
  }

  remove(id: string) {
    return this.vkmModel.findByIdAndDelete(id);
  }
}
