import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PubNubAngular } from 'pubnub-angular2';
import {StoreModule} from '@ngrx/store';
import { tweetReducer } from './state-management/tweets/tweet.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TweetEffect } from "./state-management/tweets/tweet.effect";
import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      tweets: tweetReducer
    }),
    EffectsModule.forRoot([TweetEffect])
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
