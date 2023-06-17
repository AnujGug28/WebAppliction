import { Component,Input, OnInit } from '@angular/core';
import { FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()
  show: boolean = false;

  onContinueClick(){
    nameInput: HTMLInputElement,
    descriptionInput: HTMLTextAreaElement
  }

}
