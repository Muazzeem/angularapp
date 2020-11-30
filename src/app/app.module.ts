import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {CompaniesInfoComponent} from './companies-info/companies-info.component';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {UploadFilesComponent} from './components/upload-files/upload-files.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'company', component: CompaniesInfoComponent},
  {path: 'upload', component: UploadFilesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CompaniesInfoComponent,
    HomeComponent,
    UploadFilesComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    NgbModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
