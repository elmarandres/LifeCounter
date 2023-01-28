import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  fact: string;
  catImages: string;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getFact();
    this.getCatPic();
  }
  getFact() {
    this.http.get('https://catfact.ninja/fact')
      .subscribe((response: any) => {
        this.fact = response.fact;
      });
  }
  getCatPic() {
    this.http.get('https://api.thecatapi.com/v1/images/search')
    .subscribe((response: any) => {
      this.catImages = response.map((cat: any) => cat.url);
    });
  }
}

