import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {CompaniesDataService} from './companies-data.service';


@Component({
  selector: 'app-companies-info',
  templateUrl: './companies-info.component.html',
  styleUrls: ['./companies-info.component.css']
})
export class CompaniesInfoComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  details = [];
  notEmptyPost = true;
  notscrolly = true;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadInitPost();
  }

  constructor(private data: CompaniesDataService, private http: HttpClient, private spinner: NgxSpinnerService) {
  }

  // tslint:disable-next-line:typedef
  loadInitPost() {
    this.data.getData().subscribe(data => {
      this.details = this.details.concat(data);
      // console.warn(this.details);
    });
  }

  // tslint:disable-next-line:typedef
  onScroll() {
    if (this.notscrolly && this.details.length) {
      this.spinner.show();
      this.notscrolly = false;

      this.loadNextPost();
    }
  }

  // tslint:disable-next-line:typedef
  loadNextPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const lastPost = this.details[this.details.length - 1];
    // console.log(lastPost);
    const lastPostId = lastPost.id;
    this.http.get(url,  {
      params: {
        _start: lastPostId,
        _limit: '5'
      }
    })
      .subscribe((data: any) => {
        const newPost = data;
        this.spinner.hide();
        if (newPost.length === 0) {
          this.notEmptyPost = false;
        }
        // add newly fetched posts to the existing post
        this.details = this.details.concat(newPost);
        this.notscrolly = true;
      });
  }
}
