import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-members-messages',
  templateUrl: './members-messages.component.html',
  styleUrls: ['./members-messages.component.css']
})
export class MembersMessagesComponent implements OnInit {
  @Input() recipientID: number;
  messages: Message[];
  newMessage: any = {};

  constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    console.log(this.messages);
    const currentUserId = +this.authService.decodedToken.nameid;
    this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientID).pipe(tap(messages => {
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].isRead === false && messages[i].recipientId === currentUserId) {
          this.userService.markAsRead(currentUserId, messages[i].id);
        }
      }
    })).subscribe(messages => {
      this.messages = messages;
    }, error => {
      this.alertify.error(error);
    });
  }

  sendMessage() {
    this.newMessage.recipientID = this.recipientID;
    this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe((message: Message) => {
      this.messages.unshift(message);
      this.newMessage.content = '';
    }, error => {
      this.alertify.error(error);
    });
  }

}
