const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;
console.log(responseFromServer);
console.log(typeof responseFromServer);

console.log(JSON.parse(responseFromServer));
console.log(typeof JSON.parse(responseFromServer));

const dog = {
  name: "Luna",
  age: 10,
  breed: "Havanese",
  location: {
    city: "Seattle",
    state: "WA",
  },
};

console.log("Encode to JSON");
const objectString = JSON.stringify(dog);
console.log(`Object String: ${objectString}`);

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogBtn = document.getElementById("dog-btn");
const dogTarget = document.getElementById("dog-target");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json(); // instead of text
      return processingPromise;
    })
    .then(function (processedResponse) {
      //   const dogObject = JSON.parse(processedResponse);
      const dogObject = processedResponse;
      const img = document.createElement("img");
      img.src = dogObject.message;
      img.alt = "Cute Doggo";
      dogTarget.appendChild(img);
    });
}

async function addNewDoggoAsync() {
  const response = await fetch(DOG_URL);
  const processedResponse = await response.json();
  const img = document.createElement("img");
  img.src = processedResponse.message;
  img.alt = "Cute Doggo";
  dogTarget.appendChild(img);
}

// document.querySelector("#dog-btn").addEventListener("click", addNewDoggo);
document.querySelector("#dog-btn").addEventListener("click", addNewDoggoAsync);
