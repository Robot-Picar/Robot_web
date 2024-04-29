from channels.generic.websocket import AsyncWebsocketConsumer
import json
import requests

class CommandConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        command = text_data_json['command']

        # Here you send the command to the Raspberry Pi
        response = await self.send_command_to_pi(command)
        await self.send(text_data=json.dumps({
            'status': response.get('status', 'error'),
            'command': command
        }))

    @staticmethod
    async def send_command_to_pi(command):
        url = 'http://RASPBERRY_PI_IP:5000/command'
        data = {'command': command}
        response = requests.post(url, json=data)
        return response.json()
