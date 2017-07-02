import { Component } from '@angular/core';
import {FacebookService, LoginResponse, LoginOptions, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private fb: FacebookService) {
 
    let initParams: InitParams = {
      appId: '1533309866767182',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
 
  }

// button action for Login fb 
  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
    	.then((res: LoginResponse) => {
        	console.log('Logged in', res);
	        this.fb.api('/me')
		    	.then((res: any) => {
		        	console.log('Got the users profile', res);
		      	})
		        .catch(this.handleError);
      })
      .catch(this.handleError);

  }

  private handleError(error) {
    console.error('Error processing action', error);
  }

}
