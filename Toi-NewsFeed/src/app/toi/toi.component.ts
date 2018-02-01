import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import { Http,Response } from '@angular/http';
import { TOI } from 'app/toi/toi-interface';

@Component({
  selector: 'app-toi',
  templateUrl: './toi.component.html',
  styleUrls: ['./toi.component.css']
})
export class ToiComponent implements OnInit {

  constructor(private http: Http) { }

  NewsFeed: TOI[];
  ngOnInit() { 
    
   this.myjson();
  
  }
  
  myjson()
  {
    this.http.get('https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms')
    .subscribe((res) => {
      xml2js.parseString(res.text(), (function (err, result) {
      console.log(result);
        console.log('result', result.rss.channel[0].item);
      this.NewsFeed = result.rss.channel[0].item;
     this.NewsFeed = JSON.parse(result.rss.channel[0].item);
      
    }).bind(this))
  })
  
  }


}
