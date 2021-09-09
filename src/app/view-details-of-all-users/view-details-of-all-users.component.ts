import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-view-details-of-all-users',
  templateUrl: './view-details-of-all-users.component.html',
  styleUrls: ['./view-details-of-all-users.component.css'],
})
export class ViewDetailsOfAllUsersComponent implements OnInit {
  preExistingDataArray: any = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.viewAllRecords();
  }

  viewAllRecords() {
    this.dataService.getRecords().subscribe((res) => {
      this.preExistingDataArray = res as Array<Object>;
      console.log('all data in array::::', this.preExistingDataArray[0]);
      console.log('all data in array::::', this.preExistingDataArray[0].title);
    });
  }
}
