import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Schema({ _id: false })
export class ContributionDay {
  @Field(() => Int)
  @Prop()
  contributionCount: number;

  @Field()
  @Prop()
  date: string;

  @Field()
  @Prop()
  color: string;
}

const ContributionDaySchema = SchemaFactory.createForClass(ContributionDay);

@ObjectType()
@Schema({ _id: false })
export class Week {
  // Notice the brackets [ ] to indicate an Array
  @Field(() => [ContributionDay])
  @Prop({ type: [ContributionDaySchema] })
  contributionDays: ContributionDay[];
}
const WeekSchema = SchemaFactory.createForClass(Week);

@ObjectType()
@Schema()
export class Calendar {
  @Field(() => Int)
  @Prop()
  totalContributions: number;

  @Field(() => [Week])
  @Prop({ type: [WeekSchema] })
  weeks: Week[];
}

export const CalendarSchema = SchemaFactory.createForClass(Calendar);
