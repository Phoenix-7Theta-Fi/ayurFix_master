import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { DasboardComponent } from './features/dashboard/dasboard/dasboard.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ScheduleLoggingComponent } from './shared/schedule-logging-popup/schedule-logging/schedule-logging.component';
import { MatExpansionModule } from '@angular/material/expansion'; // Import the module
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ApplicationStatusComponent } from './features/application-status/application-status/application-status.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DasboardComponent,
    ScheduleLoggingComponent,
    ApplicationStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule, 
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [provideNativeDateAdapter()],
  bootstrap: [AppComponent]
})
export class AppModule { }
