import { TableRecord } from './record';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  records: TableRecord[] = [];
  editableRecordIndex?: number;

  dataForm = new FormGroup({
    country: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),

    // // 
    // gender: string;
    // dob: any;

  });
  name: any;

  constructor() { }

  ngOnInit(): void {
  }

  saveRecord() {
    // console.log(this.dataForm.value);

    const formData = this.dataForm.value;
    const record: TableRecord = {
      name: formData.name ?? '',
      contact: formData.contact ?? '',
      country: formData.country ?? '',
      gender: formData.gender ?? '',
      dob: formData.dob ?? '',
    };
    
    // this.records[index].company = this.dataForm.controls['company'].value;

    if (this.editableRecordIndex !== undefined) {
      // Update

      this.records.splice(this.editableRecordIndex, 1, record);
      this.editableRecordIndex = undefined;
    } else {
      // Insert

      this.records.push(record);
    }

    
    this.dataForm.reset();
  }

  editRecord(index: number) {
    const record = this.records[index];
    this.editableRecordIndex = index;

    this.dataForm.setValue({
      country: record.country,
      name: record.name,
      contact: record.contact,
      gender: record.gender,
      dob: record.dob,
    });
  }
}

