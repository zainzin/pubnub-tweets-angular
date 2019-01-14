import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '.././app.state';
import * as TweetActions from '.././state-management/tweets/tweet.action'
import { TweetService } from '.././state-management/tweets/tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss'],
  providers: [TweetService]
})
export class TweetListComponent implements OnInit {
  tweets = [];
  isSubscribed = true;

  constructor(private tweetService: TweetService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscribe();
  }

  toggleSubscription() {
    if (this.isSubscribed) {
      this.tweetService.stopListening();
    } else {
      this.subscribe();
    }
    this.isSubscribed = !this.isSubscribed;
  }

  subscribe() {
    this.tweetService.listen()
    .subscribe((tweet) => {
      this.tweets.unshift(tweet.message);
      this.store.dispatch(new TweetActions.AddTweet(tweet.message))
    });
  }
}
