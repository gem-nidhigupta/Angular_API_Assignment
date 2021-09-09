import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-details-of-all-users',
  templateUrl: './view-details-of-all-users.component.html',
  styleUrls: ['./view-details-of-all-users.component.css'],
})
export class ViewDetailsOfAllUsersComponent implements OnInit {
  preExistingDataArray: any = [];
  thumbnail: any;
  bhaihoja: any;
  constructor(
    private dataService: DataServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.viewAllRecords();
  }

  async viewAllRecords() {
    this.dataService.getRecords().subscribe((res) => {
      this.preExistingDataArray = res as Array<Object>;
      //console.log('all data in array::::', this.preExistingDataArray[0]);
      //console.log('all data in array::::', this.preExistingDataArray[0].title);
      //let objectURL = this.getDataBlob(
      //  'https://via.placeholder.com/600/771796'
      //)
      //this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  // parseURI(d: any) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(d);
  //   return new Promise((res) => {
  //     reader.onload = (e: any) => {
  //       res(e.target.result);
  //     };
  //   });
  // }

  // async getDataBlob(url: any) {
  //   var res = await fetch(url);
  //   var blob = await res.blob();
  //   var uri = await this.parseURI(blob);
  //   console.log(uri);
  //   return uri;
  // }
}
