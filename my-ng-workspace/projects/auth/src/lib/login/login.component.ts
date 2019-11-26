import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-login',
    template: `
    <form>
        <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" class="form-control" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
    </form>
  `,
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
