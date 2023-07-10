import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { PlayerRecord } from "./dto/player-record";

@WebSocketGateway(8003, {cors: '*'})
export class GameGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('player')
  handleMessage(@MessageBody() data : PlayerRecord): void {
    console.log("name : " , data.name);
    console.log("message : " , data.point);
    console.log("message : " , data.multiplier);
    this.server.emit('player' , [{...data} , {name: 'CPU 1' , point : 100 , multiplier: 2.50} , {name: 'CPU 2' , point : 100 , multiplier: 3.50} , {name: 'CPU 3' , point : 100 , multiplier: 9.50} ]);
  }
}
