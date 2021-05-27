import { Injectable } from '@angular/core';
import { ChatApplication } from './models/chat-application';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

webSocket: WebSocket;

chatMessages: ChatApplication[] = [];
  listen: any;
  emit: any;

constructor() { }
  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8080/chat');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatApplication = JSON.parse(event.data);
      this.chatMessages.push(chatApplication);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatApplication: ChatApplication){
    this.webSocket.send(JSON.stringify(chatApplication));
    
    
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
