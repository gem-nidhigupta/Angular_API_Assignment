import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-get-images-from-assets',
  templateUrl: './get-images-from-assets.component.html',
  styleUrls: ['./get-images-from-assets.component.css'],
})
export class GetImagesFromAssetsComponent implements OnInit {
  logoHtml!: SafeHtml;
  base64data: any;
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}
  imageArray: any = [];
  ngOnInit(): void {
    this.http
      .get('/assets/93-100-photo.JPG', { responseType: 'blob' })
      .subscribe((res) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          this.base64data = reader.result;
          console.log('uparwala', this.base64data);
        };
        reader.readAsDataURL(res);
      });
  }
}
