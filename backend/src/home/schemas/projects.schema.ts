import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { HydratedDocument } from 'mongoose';

export type ProjectRecordDocument = HydratedDocument<ProjectRecord>;

@ObjectType()
@Schema()
export class ProjectRecord {
  @Field(() => ID)
  @Prop({ required: true, unique: true })
  id: string;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop()
  subtitle: string;

  @Field()
  @Prop()
  date: string;

  @Field()
  @Prop()
  heroImage: string;

  @Field()
  @Prop()
  description: string;


  @Field(() => [String])
  @Prop([String
  features: string[];

  @Field()
  @Prop()
  challenges: string;

  @Field(() => [String])
  @Prop([String])
  techStack: string[];

  @Field({ nullable: true })
  @Prop({ required: false })
  githubUrl?: string;

  @Field({ nullable: true })
  @Prop({ required: false })
  liveUrl?: string;
}

export const ProjectRecordSchema = SchemaFactory.createForClass(ProjectRecord);

