import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  getData()
  {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url, {
      params: {
        _start: '0',
        _limit: '7'
      }
    });
  }

}
