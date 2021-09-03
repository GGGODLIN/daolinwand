// import mqtt from 'mqtt';
import { connect } from 'mqtt/dist/mqtt';

const websocketUrl = 'ws://elderwand2.g13.group:8083/mqtt';
const apiEndpoint = '/3NOv/notify/3NOv-V4uppJrqeKCX/';
const subTest = '/3NOv/telemetry/#';

const options = {
  clean: true, // 保留回话
  connectTimeout: 40000, // 超时时间
  clientId: 'web_mqttjs_2763cd800a',
  username: 'admin',
  password: 'public',
};

function getClient() {
  const client = connect(websocketUrl, options);
  client.stream.on('error', (err) => {
    console.log(`Connection to ${websocketUrl} failed`);
    client.end();
  });
  return client;
}

function subscribe(client, topic, msgCallback, userDevices = null) {
  console.log('subscribe!!!!', topic)
  const callBack = (err, granted) => {
    if (err) {
      console.log('Subscription request failed', err);
      //subscribe(client, topic, msgCallback, userDevices)
    } else {
      console.log('Subscription request granted', granted);
      console.log('client connected?', client?.connected)
      client.on('message', (topic, payload, packet) => {
        const message = String.fromCharCode.apply(null, new Uint8Array(payload));
        // const message = new TextDecoder('utf-8').decode(payload);
        console.log('client.on', message);
        // callBack({topic: topic, message: message});
        //client.stream.removeListener('message', onMessage)
        msgCallback(message, userDevices);
      });
    }
  };
  return client.subscribe(topic, callBack);
}

function onMessage(client, callBack, userDevices) {
  console.log('onMessage!!!');
  client.on('message', (topic, payload, packet) => {
    const message = String.fromCharCode.apply(null, new Uint8Array(payload));
    // const message = new TextDecoder('utf-8').decode(payload);
    console.log('client.on', message);
    // callBack({topic: topic, message: message});
    //client.stream.removeListener('message', onMessage)
    callBack(message, userDevices);
  });
}

function unsubscribe(client, topic) {
  client.unsubscribe(topic);
}

function closeConnection(client) {
  client.end();
}

function publish(client, topic, payload) {
  console.log('publish', topic, payload)
  client.publish(topic, payload, { qos: 0 }, (e) => console.log('publish callback', e));
}

function getApiEndpoint() {
  return apiEndpoint;
}

const mqttService = {
  getClient,
  subscribe,
  onMessage,
  unsubscribe,
  closeConnection,
  publish,
  getApiEndpoint,
};

export const Client = connect(websocketUrl, options);
export default mqttService;
