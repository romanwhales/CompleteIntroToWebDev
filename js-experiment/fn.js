function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(3);
console.log(`finalAnswer ${finalAnswer}`);

const otherAnswer = addTwo(10);
console.log(`otherAnswer ${otherAnswer}`);

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName} I'm extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.
    `;
}

console.log(greet("Brian", "Holt", "Lord.", "Salutation"));
console.log(greet("Jack", "Sparrrow", "Captain", "Ahoy"));

const meow = function () {
  console.log("meooow");
};

// New way of function

const chirp = () => {
  console.log("chirp");
};
console.log(`Functions as first class citizens ${meow()}`);

console.log(`${chirp()}`);
