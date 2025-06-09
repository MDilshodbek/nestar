import { Field, ObjectType } from '@nestjs/graphql';
import { MemberAuthType, MemberStatus, MemberType } from '../../enums/member.enum';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Member {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => String)
	memberType: MemberType;

	@Field(() => String)
	memberStatus: MemberStatus;

	@Field(() => MemberAuthType)
	memberAuthType: MemberAuthType;

	@Field(() => String)
	memberPhone: String;

	@Field(() => String)
	memberNick: String;

	memberPassword?: string;

	@Field(() => String, { nullable: true })
	memberFullName?: string;

	@Field(() => String)
	memberImage: string;

	@Field(() => String, { nullable: true })
	memberAddress?: string;

	@Field(() => String, { nullable: true })
	memberDesc?: string;

	@Field(() => String)
	memberProperties: number;

	@Field(() => String)
	memberArticles: number;

	@Field(() => String)
	memberFollowers: number;

	@Field(() => String)
	memberFollowing: number;

	@Field(() => String)
	memberPoints: number;

	@Field(() => String)
	memberLikes: number;

	@Field(() => String)
	memberViews: number;

	@Field(() => String)
	memberComments: number;

	@Field(() => String)
	memberRank: number;

	@Field(() => String)
	memberWarnings: number;

	@Field(() => String)
	memberBlocks: number;

	@Field(() => Date, { nullable: true })
	deletedAt: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date, { nullable: true })
	updatedAt: Date;
}
