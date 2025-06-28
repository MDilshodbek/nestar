import { Resolver } from '@nestjs/graphql';
import { FollowService } from './follow.service';

@Resolver()
export class FollowResolver {
        constructor(private readonly followService: FollowService) {}
    
        // @UseGuards(AuthGuard)
        // @Mutation((returns) => Comment)
        // public async createComment(
        //     @Args('input') input: CommentInput,
        //     @AuthMember('_id') memberId: ObjectId,
        // ): Promise<Comment> {
        //     console.log('Mutation: createComment');
        //     return await this.commentService.createComment(memberId, input);
        // }
}
