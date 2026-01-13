import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Schema({ _id: false })
export class FollowStats {
  @Field(() => Int)
  @Prop()
  totalCount: number;
}

const FollowStatsSchema = SchemaFactory.createForClass(FollowStats);

@ObjectType()
@Schema()
export class UserProfile {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop({ required: true, unique: true })
  login: string;

  @Field()
  @Prop()
  avatarUrl: string;

  @Field({ nullable: true })
  @Prop()
  bio: string;

  @Field()
  @Prop()
  url: string;

  @Field(() => FollowStats)
  @Prop({ type: FollowStatsSchema })
  followers: FollowStats;

  @Field(() => FollowStats)
  @Prop({ type: FollowStatsSchema })
  following: FollowStats;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
