const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const rootElement = document.getElementById("root");

  // create h1 element
  const h1Element = document.createElement("h1");
  h1Element.textContent = "FREELANCERS";
  rootElement.appendChild(h1Element);

  // create an unordered list element.
  const ulElement = document.createElement("ul");

  //Loop though the users array
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    // creat a list item li element
    const liElement = document.createElement("li");
    liElement.textContent =
      user.name + " - Age: " + user.age + ", Occupation: " + user.occupation;
    ulElement.appendChild(liElement);
  }

  // append the elemets to the "root" div
  rootElement.appendChild(ulElement);
}

//call the main function
main();
