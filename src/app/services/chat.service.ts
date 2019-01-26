import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) {
  }

  sendMessage(mensaje: string) {

    const payload = {
      de: 'JCondori',
      cuerpo: mensaje
    };

    this.wsService.emit('mensajes', payload);

  }

  getMessages() {
    return this.wsService.listen('mensaje_nuevo');
  }

}
