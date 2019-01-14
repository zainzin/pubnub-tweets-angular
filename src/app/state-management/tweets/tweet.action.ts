import { Action } from '@ngrx/store';
import { Tweet } from './tweet.model';

export const ADD_TWEET = 'ADD_TWEET';

export class AddTweet implements Action {
    readonly type = ADD_TWEET;

    constructor(public tweet: Tweet){}
}

export type Actions = AddTweet;