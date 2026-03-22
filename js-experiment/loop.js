let friendsAtMyParty = 0;

friendsAtMyParty = friendsAtMyParty + 1;
friendsAtMyParty = friendsAtMyParty + 1;

console.log(friendsAtMyParty);

let friendsAtMyParty2 = 0;

while (friendsAtMyParty2 < 10) {
  friendsAtMyParty2 = friendsAtMyParty2 + 1; // Control variable
}

console.log(`friendsAtMyParty2 ${friendsAtMyParty2}`);

let friendsAtMyParty3 = 0;
for (let i = 0; i < 10; i++) {
  friendsAtMyParty3++;
}

console.log(`friendsAtMyParty3 ${friendsAtMyParty3}`);

let character = "w";
let timesToRepeat = 5;

while (timesToRepeat > 0) {
  character += "w";
  --timesToRepeat;
}
console.log(`character ${character}`);
