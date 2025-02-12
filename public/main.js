const url = "http://192.168.0.102:3000";

function createObject(method, data) {
  if (method === "GET") {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  return {
    method: method,
    body: JSON.stringify({ text: data }),
    headers: {
      "Content-Type": "application/json",
    },
  };
}

function sendPost() {
  var data = document.querySelector(".form input");
  fetch(`${url}/capitalize`, createObject("POST", data.value))
    .then((messback) => messback.json())
    .then((messback) => {
      data.value = messback.messback;
    });
}

function sendGet() {
  var data = document.querySelector(".form input");
  fetch(`${url}/hello`, createObject("GET"))
    .then((messback) => messback.json())
    .then((messback) => {
      data.value = messback.messback;
    });
}

function main() {
  alert(
    "This application just build to run on certain devices (monitor 16:9 or 1920x1080) so there will be some error about number (width, height, ...)"
  );
}

main();
