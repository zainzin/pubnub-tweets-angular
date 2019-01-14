import { Tweet } from './state-management/tweets/tweet.model';

export interface AppState {
  readonly tweets: Tweet[];
}