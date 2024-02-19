import { Component } from '@angular/core';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MuseumComponent,
    ArrowLeftComponent,
    ChatSuggestionsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
}
