import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PubNubAngular } from 'pubnub-angular2';

@Injectable({
    providedIn: "root"
})
export class TweetService {
    channel = 'pubnub-twitter';


    constructor(private http: HttpClient, private pubnub: PubNubAngular) {
        pubnub.init({ publishKey: 'pub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe', subscribeKey: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe' });

        pubnub.subscribe({
            channels: [this.channel]
        });
    }

    public listen(): Observable<any> {
        return Observable.create(observer => {
            this.pubnub.addListener({
                message: (msg) => observer.next(msg)
            });
        });
    }

    public stopListening() {
        this.pubnub.removeAllListeners();
    }
}