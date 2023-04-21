import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  employeeForm !: FormGroup;

  constructor(private formbuilder: FormBuilder,private api:ApiService) {}
  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', Validators.required],
    });

  }
  addemployee(data:datamodel){
    // console.log(data)
   
  }
}

