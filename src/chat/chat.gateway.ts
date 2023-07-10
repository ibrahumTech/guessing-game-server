import { SubscribeMessage, WebSocketGateway , WebSocketServer , MessageBody } from '@nestjs/websockets';
import { Message } from "./dto/message";

@WebSocketGateway(8002, {cors: '*'})
export class ChatGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data : Message): void {
    console.log("name : " , data.name);
    console.log("message : " , data.message);
    this.server.emit('message' , data);
  }
}
