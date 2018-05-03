import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  startDate = new Date();  
  languages = [];
  model = new Employee('', '', true, '', 'default');
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPoster) {
    this.formPoster.getLanguages()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('get error: ', err)
      );
  }

  submitForm(form: NgForm) {
    // validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;

    this.formPoster.postEmployeeForm(this.model).subscribe(
      data => console.log('success: ', data),
      err => console.log('error: ', err)
    )
  }

  validatePrimaryLanguage(value) {
    //console.log('lang:' + this.model.primaryLanguage); //IMPORTANT THIS PASSED ME DATA
    if (value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
}
