import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/services/data-service.service';
@Component({
  selector: 'app-get-user-details-page',
  templateUrl: './get-user-details-page.component.html',
  styleUrls: ['./get-user-details-page.component.css'],
  providers: [DataServiceService],
})
export class GetUserDetailsPageComponent implements OnInit {
  userDetails!: FormGroup;
  preExistingDataArray: any = [];
  detailsToBeSent = {
    title: '',
    url: '',
    thumb_url: '',
  };

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userDetails = new FormGroup({
      title: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required]),
      thumb_url: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.userDetails.value);
    this.detailsToBeSent.title = this.userDetails.value?.title;
    this.detailsToBeSent.url = this.userDetails.value?.url;
    this.detailsToBeSent.thumb_url = this.userDetails.value?.thumb_url;
    this.dataService.sendData(this.detailsToBeSent).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // viewAllRecords() {
  //   this.dataService.getRecords().subscribe((res) => {
  //     this.preExistingDataArray = res as Array<Object>;
  //     console.log('all data in array::::', this.preExistingDataArray[0]);
  //     console.log('all data in array::::', this.preExistingDataArray[0].title);
  //   });
  // }
}
