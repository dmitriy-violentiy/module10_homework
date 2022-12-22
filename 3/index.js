const wsUri = "wss://echo-ws-service.herokuapp.com";

const output = document.getElementById("output");
const inp = document.getElementById("inp");
const btnSend = document.querySelector('.j-btn-send');
const btnLocation = document.querySelector('.j-btn-location');

let websocket;

function writeToScreen(message) {
   let pre = document.createElement("div");
   pre.style = "padding: 4px 10px; margin: 5px 0; width: fit-content"
   pre.innerHTML = message;
   output.appendChild(pre);
}

websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) {
   writeToScreen(
      '<span style="color: #32CD32; font-weight: bold">Соединение установлено</span>'
   );
};

websocket.onmessage = function(evt) {
   writeToScreen(
      '<span display: inline-block>' + "<span style='color: blue'>Сервер: </span>" + evt.data + '</span>'
   );
};
websocket.onerror = function(evt) {
   writeToScreen(
      '<span style="font-weight: bold; color: red">Ошибка соединения:</span> ' + evt.data + '</span>'
   );
};

btnSend.addEventListener('click', () => {
   const message = inp.value;
   writeToScreen("<span style='color: #32CD32'>Вы: </span>" + message);
   websocket.send(message);
});

const success = (position) => {
   const latitude  = position.coords.latitude;
   const longitude = position.coords.longitude;
   const href = `<span style="color: #32CD32">Вы: </span> <a target='_blank'; href='https://www.openstreetmap.org/#map=18/${latitude}/${longitude}'>гео-локация</a>`;
   writeToScreen(href)
}

btnLocation.addEventListener('click', () => {
   navigator.geolocation.getCurrentPosition(success)
});