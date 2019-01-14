import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}


/*

    // this.pubnub.publish({
    //   message: 'this is a test',
    //   channel: 'Channel-omknw33jt'
    // }, (state) => {
    //   console.log(state);
    // });
    // this.pubnub.addListener({
    //   message: ({message}) => {
    //     console.log(message);
    //     // this.store.dispatch(new TweetActions.AddTweet(message) )
    //   }
    // });

    // this.store.select('tweets').interval(2*60*1000)
    // .timeInterval();

    // this.store.pipe(repeat())
    // .subscribe((tweets) => {
    //   console.log(tweets);
    // });

//     setInterval(() => {
//       this.store.select((state) => state.tweets)
//       .subscribe((tweets) => {
//         console.log(tweets);
//       });
//     }, 5000);
// // 60000
    // this.pubnub.subscribe({
    //   channels: ['Channel-omknw33jt']//['pubnub-twitter']
    // });
*/
