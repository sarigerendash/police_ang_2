import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent {
    socket = io('http://localhost:443', {
        transports: ['websocket'],
      });
    
      constructor() {
        this.socket = io('http://127.0.0.1:443');
        this.socket.emit('message', 'hello');
        this.getMessages().subscribe((data) => console.log(data));
      }
    
    
      sendMessage(message: string): void {
        this.socket.emit('message', message);
      }
      send() {
        this.socket.emit('message', 'waga');
      }
      getMessages(): Observable<string> {
        return new Observable<string>((observer) => {
          this.socket.on('message', (data: string) => {
            observer.next(data);
            console.log(data);
          });
          this.socket.on('postTime', (data: string) => {
            observer.next(data);
            console.log(data);
          });

          this.socket.on('add', (data: string) => {
            observer.next(data);
            console.log(data);
          });
        });
      }

      getUserName () {
        this.socket.emit('getUserName', 'sari');
      }
      getTime(){
        this.socket.emit('getTime');
      }
      add(){
        this.socket.emit('add',{name:'sari',age:23});
      }
    
}
