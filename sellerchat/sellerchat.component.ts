import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatApplication } from 'src/app/models/chat-application';
import { WebSocketService } from 'src/app/web-socket.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sellerchat',
  templateUrl: './sellerchat.component.html',
  styleUrls: ['./sellerchat.component.css']
})
export class SellerchatComponent implements OnInit, OnDestroy {

  showme:boolean = false
  username:String
  constructor(public webSocketService: WebSocketService, private router: Router,private route: ActivatedRoute){ }


  ngOnInit(): void {
    this.webSocketService.openWebSocket();
     
  }
 
  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

 

  sendMessage(sendForm: NgForm) {
    const chatApplication = new ChatApplication(sendForm.value.user, sendForm.value.message);
     this.webSocketService.sendMessage(chatApplication);
    sendForm.controls.message.reset();
  }
 
  toggleMe():void{
    this.showme =!this.showme;
  }
  

  logout(){

    Swal.fire({
      text:'Do you want to logout?',
       icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!',
  
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('isloged');
        this.router.navigate(['']);
      } 
    })
  
  
  }

}
  


