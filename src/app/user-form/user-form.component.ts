import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    dateOfBirth: [''],
    gender: [''],
    selected: [''],
    swimming: false,
    riding: false,
    traveling: false,
  });

  saveForm() {
    console.log('Form Data Is', this.profileForm.value);
  }

  ngOnInit(): void {}
}
