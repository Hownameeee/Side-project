const url = "http://localhost:3000";

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