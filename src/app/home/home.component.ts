import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('', '', true, '', 'default');
  hasPrimaryLanguageError = false;

  validatePrimaryLanguage(value) {
    //console.log('lang:' + this.model.primaryLanguage); //IMPORTANT THIS PASSED ME DATA
    if (value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
}
