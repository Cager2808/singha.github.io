import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import Typed from 'typed.js';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  cvUrl: any;
  
   constructor(private profileService: ProfileService) { }

  ngOnInit() {

   this.cvUrl =  this.profileService.resumeUrl

  
   }

}
