import { WebSocketServer } from 'ws'

const ws = new WebSocketServer({ port: 8080 });

ws.on('connection', function connection(ws) {
    ws.on("error", console.error);

    ws.on('message', function message(data) {
        ws.send("ping pong")
    })

})