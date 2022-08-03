import { TableRecord } from './record';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  records: TableRecord[] = [];

  // formData: TableRecord = {
  //   country: '',
  //   contact: '',
  //   company: '',
  // };
  // country = '';
  // contact = '';
  // company = '';

  dataForm = new FormGroup({
    country: new FormControl(null, [Validators.required]),
    contact: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
  });
  name: any;

  constructor() { }

  ngOnInit(): void {
  }

  saveRecord() {
    console.log(this.dataForm.value);

    const formData = this.dataForm.value;
    const record: TableRecord = {
      company: formData.company ?? '',
      contact: formData.contact ?? '',
      country: formData.country ?? ''
    };

    this.records.push(record);
  }

  editRecord(e: any) {
    // this.name.setValue('');
    // console.log(this.records);
    console.log(TableRecord.find(this.editRecord));
  }

}
