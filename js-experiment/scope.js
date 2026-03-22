function addFive(number) {
  const someVariable = "You can't see me outside of this function";
  return number + 5;
}

console.log(addFive(10));
console.log(`Scope is why you are seeing this ${someVariable}`);
