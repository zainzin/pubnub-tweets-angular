import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import * as tweetActions from './tweet.action';
import { TweetService } from './tweet.service';
import { AppState } from 'src/app/app.state';

@Injectable()
export class TweetEffect {
  constructor(private action$: Actions, private store$: Store<AppState> ,private tweetService: TweetService) {}

  @Effect({dispatch: false})
  addTweet$: Observable<Action> = this.action$.pipe(
    ofType<tweetActions.AddTweet>(tweetActions.ADD_TWEET),
    mergeMap(action => this.tweetService.listen()),
    map(msg => msg.message)
  )
}
