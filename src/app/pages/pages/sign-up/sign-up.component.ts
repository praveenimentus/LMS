import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@services/*';

import { BlankLayoutCardComponent } from 'app/components/blank-layout-card';

@Component({
  selector: 'app-sign-up',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent extends BlankLayoutCardComponent implements OnInit {

  public signupForm: FormGroup;
  private userType;
  private referenceID;
  private createdByID;
  private modifiedByID;
  private isActive;
  private email;
  private password;
  private username;
  public emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  public error: string;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    super();

    this.signupForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        Validators.maxLength(20),
      ]),
      username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      userType: new FormControl(''),
      referenceID: new FormControl(0),
      createdByID: new FormControl(1),
      modifiedByID: new FormControl(0),
      isActive: new FormControl(true),
    });
    this.email = this.signupForm.get('email');
    this.password = this.signupForm.get('password');
    this.username = this.signupForm.get('username');
    this.userType = this.signupForm.get('userType');
    this.referenceID = this.signupForm.get('referenceID');
    this.createdByID = this.signupForm.get('createdByID');
    this.modifiedByID = this.signupForm.get('modifiedByID');
    this.isActive = this.signupForm.get('isActive');
  }

  public ngOnInit() {
    this.authService.logout();
    this.signupForm.valueChanges.subscribe(() => {
      this.error = null;
    });
  }

  public login() {
    this.error = null;
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.getRawValue())
        .subscribe(res => this.router.navigate(['/app/dashboard']), error => this.error = error.message);
    }
  }

  public onInputChange(event) {
    event.target.required = true;
  }
}
