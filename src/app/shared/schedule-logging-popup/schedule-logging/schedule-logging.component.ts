import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-logging',
  templateUrl: './schedule-logging.component.html',
  styleUrl: './schedule-logging.component.css'
})
export class ScheduleLoggingComponent {
  accordionItems: any[] = [
    {
      title: 'Morning',
      description: 'Description for Accordion 1',
      content: 'Content for Accordion 1',
      expanded: true // Set to true for default expansion
    },
    {
      title: 'Midday',
      description: 'Description for Accordion 2',
      content: 'Content for Accordion 2',
      expanded: true // Set to true for default expansion

    },
    {
      title: 'Night',
      description: 'Description for Accordion 3',
      content: 'Content for Accordion 3',
      expanded: true // Set to true for default expansion

    }
    // {
    //   title: 'Accordion 4',
    //   description: 'Description for Accordion 4',
    //   content: 'Content for Accordion 4',
    //   expanded: true // Set to true for default expansion

    // },
    // {
    //   title: 'Accordion 5',
    //   description: 'Description for Accordion 5',
    //   content: 'Content for Accordion 5',
    //   expanded: true // Set to true for default expansion

    // },
  ];

  logSelection(title: string): void {
    console.log(`Selected: ${title}`);
  }
  activity: any = [
    { name: 'Wake up Time', expected: '6:00', actual: '' },
    { name: 'Yoga', expected: 'Yes', actual: ''},
    { name: 'Breakfast', expected: 'Ragi Dosa', actual: '' },
    { name: 'Medication', expected: 'Aaragwadham Kashaayam Tablet:', actual: '' }
  ];
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Activity Submitted:', this.activity);
    // You can add code to save this activity to a backend or local storage
  }
}
