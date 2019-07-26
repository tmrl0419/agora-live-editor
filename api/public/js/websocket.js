var fs = require('fs');
var webSocketServer = require('websocket').server;

var CHANNELS = {};

function onRequest(socket) {
    console.log("헬로우");
    var origin = socket.origin + socket.resource;
    var websocket = socket.accept(null, origin);

    websocket.on('message', function (message) {
        if (!message || !websocket) return;

        if (message.type === 'utf8') {
            try {
                onMessage(JSON.parse(message.utf8Data), websocket);
            }
            catch (e) { }
        }
    });

    websocket.on('close', function () {
        try {
            truncateChannels(websocket);
        }
        catch (e) { }
    });
}

function onMessage(message, websocket) {
    if (!message || !websocket) return;

    try {
        if (message.checkPresence) {
            checkPresence(message, websocket);
        }
        else if (message.open) {
            onOpen(message, websocket);
        }
        else {
            sendMessage(message, websocket);
        }
    }
    catch (e) { }
}

function onOpen(message, websocket) {
    if (!message || !message.channel || !websocket) return;

    try {
        var channel = CHANNELS[message.channel];

        if (channel) {
            CHANNELS[message.channel][channel.length] = websocket;
        }
        else {
            CHANNELS[message.channel] = [websocket];
        }
    }
    catch (e) { }
}

function sendMessage(message, websocket) {
    if (!message || !message.data || !websocket) return;
    var channel = [];

    try {
        message.data = JSON.stringify(message.data);
        channel = CHANNELS[message.channel];
    }
    catch (e) { }

    if (!channel || !message || !message.data) {
        return;
    }

    for (var i = 0; i < channel.length; i++) {
        if (channel[i] && channel[i] != websocket) {
            try {
                channel[i].sendUTF(message.data);
            } catch (e) { }
        }
    }
}

function checkPresence(message, websocket) {
    if (!message || !message.channel || !websocket) return;

    try {
        websocket.sendUTF(JSON.stringify({
            isChannelPresent: !!CHANNELS[message.channel]
        }));
    }
    catch (e) { }
}

function swapArray(arr) {
    var swapped = [],
        length = arr.length || 0;

    for (var i = 0; i < length; i++) {
        if (arr[i]) {
            try {
                swapped[swapped.length] = arr[i];
            }
            catch (e) { }
        }
    }
    return swapped;
}

function truncateChannels(websocket) {
    if (!websocket) return;

    for (var channel in CHANNELS) {
        var _channel = CHANNELS[channel];
        if (_channel && _channel.length) {
            for (var i = 0; i < _channel.length; i++) {
                try {
                    if (_channel[i] == websocket) {
                        delete _channel[i];
                    }
                }
                catch (e) { }
            }

            try {
                CHANNELS[channel] = swapArray(_channel);

                if (CHANNELS && CHANNELS[channel] && !CHANNELS[channel].length) {
                    delete CHANNELS[channel];
                }
            }
            catch (e) { }
        }
    }
}


module.exports = (app) => new webSocketServer({
    httpServer: app,
    autoAcceptConnections: false,
}).on('request',onRequest);