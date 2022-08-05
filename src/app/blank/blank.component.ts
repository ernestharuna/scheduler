import { TableRecord } from './record';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { findIndex } from 'rxjs';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  records: TableRecord[] = [];
  editableRecordIndex?: number;

  dataForm = new FormGroup({
    country: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
  });
  name: any;

  constructor() { }

  ngOnInit(): void {
  }

  saveRecord() {
    // console.log(this.dataForm.value);

    const formData = this.dataForm.value;
    const record: TableRecord = {
      company: formData.company ?? '',
      contact: formData.contact ?? '',
      country: formData.country ?? ''
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
      company: record.company,
      contact: record.contact,
    });
  }

}
