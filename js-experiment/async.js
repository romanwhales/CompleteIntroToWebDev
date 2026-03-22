async function getName() {
  return "Wale";
}

console.log(getName());

getName().then(function (name) {
  console.log(`Name is ${name}`);
});
