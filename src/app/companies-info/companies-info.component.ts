import {Component, OnInit} from '@angular/core';
import {CompaniesDataService} from './companies-data.service';

@Component({
  selector: 'app-companies-info',
  templateUrl: './companies-info.component.html',
  styleUrls: ['./companies-info.component.css']
})
export class CompaniesInfoComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  datalist: Object = [];
  constructor(private data: CompaniesDataService) {
    // tslint:disable-next-line:no-shadowed-variable
    this.data.getData().subscribe(data => {
      console.warn(data);
      this.datalist = data;
    });
  }

  ngOnInit(): void {
  }

}
