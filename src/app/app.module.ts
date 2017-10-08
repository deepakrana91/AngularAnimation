import { ServerService } from './server.service';
import { Http, HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { TitleCasePipe } from './title-case.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserdataService } from './shared/userdata.service';
import { GenderarrayService } from './shared/genderarray.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/Forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDataComponent } from './user-data/user-data.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDataComponent,
    SearchDataComponent,
    FilterPipe,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [GenderarrayService,
             UserdataService,
             AuthGuard,
             AuthService,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
