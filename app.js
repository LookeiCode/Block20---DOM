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

function main(users) {
    const root = document.getElementById("root");
    const h1 = document.createElement("h1");
    h1.innerText = "FREELANCERS";
    h1.style.color = "blue";
    root.appendChild(h1);

    const ul = document.createElement("ul");

    for (let i = 0; i < users.length; i++) {
        const freelancer = users[i].name;
        const li = document.createElement("li");
        li.innerText = freelancer;
        ul.style.color = "red";
        ul.appendChild(li);
    }
    root.appendChild(ul);
}

//call the main function
main(users);