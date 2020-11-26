import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged, distinctUntilKeyChanged} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    comment: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.warn(this.profileForm.value);
    // @ts-ignore
    this.http.post('http://127.0.0.1:8000/jobs/contact/', data)
      .subscribe((result) => {
        console.warn(result);
      });
  }

  ngOnInit(): void {
    // this.profileForm.valueChanges.pipe(debounceTime(1000)).subscribe(
    //   next => {
    //     console.log(next);
    //   }
    // );
  }

}
