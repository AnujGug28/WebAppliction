import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social-Site';
  auth= new FirebaseTSAuth();
  isLoggedIn= false;
  constructor(private loginSheet: MatBottomSheet){
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn:User => {
              alert("LoggedIn");
              this.isLoggedIn = true;

            },
            whenSignedOut: user => {
              alert("LoggedOut");

            },

          }
        );
      }
    );

  }
  onLogoutClick(){
    this.auth.signOut();
  }
  loggedIn() {
    return this.auth.isSignedIn();
  }
  onLoginClick(){
    this.loginSheet.open(AuthenticatorComponent);
  }
}
