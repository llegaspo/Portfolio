import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { HydratedDocument } from 'mongoose';

export type HackathonRecordDocument = HydratedDocument<HackathonRecord>;

@ObjectType()
@Schema()
export class HackathonRecord {
  @Field(() => ID)
  @Prop({ required: true, unique: true })
  id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop()
  role: string;

  @Field()
  @Prop()
  result: string;

  @Field()
  @Prop()
  shortDesc: string;

  @Field()
  @Prop()
  fullDesc: string;

  @Field()
  @Prop()
  image: string;

  @Field({ nullable: true })
  @Prop({ required: false })
  projectId?: string;
}

export const HackathonRecordSchema =
  SchemaFactory.createForClass(HackathonRecord);
