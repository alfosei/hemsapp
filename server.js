const mqtt = require('mqtt');
const WebSocket = require('ws');

const mqttBroker = 'mqtt://192.168.100.205'; // Replace with your MQTT broker URL

const wss = new WebSocket.Server({ port: 8080 });
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Your request handling logic here
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

wss.on('connection', (ws) => {
  console.log('WebSocket connection established.');

  const client = mqtt.connect(mqttBroker);

  client.on('connect', () => {
    console.log('Connected to MQTT broker.');

    client.subscribe(['socket1', 'socket2'], (err) => {
      if (err) {
        console.error('Error subscribing to MQTT topics:', err);
      }
    });
  });

  client.on('message', (topic, message) => {
    ws.send(JSON.stringify({ topic, message: message.toString() }));
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed.');
    client.end();
  });
});
