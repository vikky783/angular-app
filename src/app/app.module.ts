import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import {FormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './highlight.directive';
import { CcodePipe } from '../pipes/ccode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfilesComponent,
    UsersComponent,
    HighlightDirective,
    CcodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
