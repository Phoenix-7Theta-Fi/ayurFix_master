import { Component, Input, model } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleLoggingComponent } from '../../../shared/schedule-logging-popup/schedule-logging/schedule-logging.component';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})
export class DasboardComponent {
  selected = model<Date | null>(null);
  minDate = new Date();

  constructor(private dialog: MatDialog){
  }

  step = 1;
  progress = 0;


  arrayOfProducts = [
    { id: 1, imgpath: 'assets/images/organic_tumeric.jpeg', name: 'Organic Tumeric Powder', enableAddition:false,countOfProducts:0 },
    { id: 2, imgpath: 'assets/images/coldPRessedOil.jpeg', name: 'Cold Pressed Oil', enableAddition:false ,countOfProducts:0 },
    { id: 3, imgpath: 'assets/images/abhi-zyme3.jpg', name: 'Abhi Zyme', enableAddition:false ,countOfProducts:0   },
    { id: 4, imgpath: 'assets/images/ayurvedakerala.jpeg', name: 'Ayudrvedakerala', enableAddition:false ,countOfProducts:0  },
  ]


  nextStep() {
    if (this.step < 3) {
      this.step++;
      this.progress += 33.33; // increment progress by 33.33% for each step
    }
  }

  onDateSelected(event:any){
    console.log('Date changed:', event);
    this.openSchedulingpopup();
  }

  openSchedulingpopup(){
    const dialogRef = this.dialog.open(ScheduleLoggingComponent, {
      width: '100%',
      height: '80%',
      data: { date: this.selected } // pass data to the popup component
    });
  }
}
