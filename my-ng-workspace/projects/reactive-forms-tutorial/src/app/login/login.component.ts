import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login(loginForm)" #loginForm="ngForm" [formGroup]="loginFormGroup" >
        <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" class="form-control" required formControlName="myEmail" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control" ngModel minLength="5" />
        </div>
        <!-- <hani-addresses ngModel [formControl]="" ></hani-addresses> -->
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    // email : string;
    // password: string

    /**
     * @Directive({ selector: 'form', exportAs: 'ngForm' })
     * class NgForm
     */

    // emailFormControl : FormControl = new FormControl('yariv@nerdeez.com', [Validators.required, Validators.minLength(5)]);

    loginFormGroup : FormGroup = new FormGroup({
        myEmail: new FormControl('yariv@nerdeez.com', [Validators.required, Validators.minLength(5)]),
        addresses: new FormArray([
            new FormGroup({
                city: new FormControl(),
                street: new FormControl()
            })
        ])
    });

    loginFormGroup2 : FormGroup = this._formBuilder.group({
        myEmail: ['yariv@nerdeez.com', [Validators.required, Validators.minLength(5)] ],
        myPassword: this._formBuilder.control(''),
        addresses: this._formBuilder.array(
            [
               this._formBuilder.group({
                   city: '',
                   street: ''
               }) 
            ]
        )
    })


    constructor(private _formBuilder : FormBuilder) { }

    ngOnInit() {
    }


    login = (loginForm : NgForm) => {
        // throw new Error('something happened');
        // {email: '...', password: '...'}
        console.log(loginForm.value);
        // console.log(this.emailFormControl.value);
        // console.log(this.emailFormControl.invalid)
    }

}
