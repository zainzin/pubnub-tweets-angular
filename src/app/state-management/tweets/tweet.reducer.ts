import { Tweet } from './tweet.model';
import * as TweetActions from './tweet.action';

export function tweetReducer(state: Tweet[] = [], action: TweetActions.Actions) {
    switch (action.type) {
        case TweetActions.ADD_TWEET:
            return [...state, action.tweet];
        default:
            return state;
    }
}