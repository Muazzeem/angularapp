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
    const url = 'http://127.0.0.1:8000/jobs/contact/';
    return this.http.get(url);
  }

}
