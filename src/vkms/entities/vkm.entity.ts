import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vkm {

  @Prop({unique: true, required: true})
  name: string;

  @Prop({required: true})
  ec: number;

  @Prop({required: true})
  niveau: string;

  @Prop({required: true})
  thema: string;

  @Prop({required: false})
  keywords: string[];

  @Prop({default: true})
  active: boolean;

}

export const VkmSchema = SchemaFactory.createForClass(Vkm);

