import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  editableIndex?: number;

  newForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  editName: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  saveValue(){
  const name = this.newForm.controls["name"].value;
  if (this.editableIndex !== undefined) {
    // we likely clicked on the edit button
    this.newData.splice(this.editableIndex, 1, name);
  } else {
    // likely an add operation
    this.newData.push(name); 
  }
  
  console.log(this.newData);
  
  this.newForm.reset();
 }

 deteleValue(name: string){
  this.newData = this.newData.filter((i) => i !== name);
 }

 editValue(name: string){
  const editName = this.newData.find((item) => item == name);
  const indexValue = this.newData.findIndex((item) => item == name);
  this.editableIndex = indexValue;

  console.log(indexValue);
  console.log(editName);

  this.newForm.patchValue({
    name: editName,
  });
 }

  weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  newData = [
    "Janurary",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

onDrop(event: CdkDragDrop <string []>){
  if(event.previousContainer === event.container){
        moveItemInArray(
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );
  } else{
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }
}

  // onDrop(event: CdkDragDrop <any []>): void{
  //   if(event.previousContainer === event.container){
  //     moveItemInArray(
  //         event.container.data,
  //         event.previousIndex,
  //         event.currentIndex
  //     );
  //   }
  //   else{
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     )
  //   }
  // }

}
