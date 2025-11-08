import { Post, User, Comment } from './types';
export declare const api: {
    getPosts(): Promise<Post[]>;
    getPost(id: number): Promise<Post>;
    getPostComments(postId: number): Promise<Comment[]>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
};
