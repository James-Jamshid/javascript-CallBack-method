function container() {
  let result = "";
  setTimeout(() => {
    students.forEach((Element) => {
      result += `<li>${Element.email} ${Element.id} </li>`;
    });
    document.body.innerHTML = result;
  }, 1000);
}

function addStudent(value, callback) {
  setTimeout(() => {
    students.push(value);
    callback();
  }, 2000);
}
addStudent(
  {
    id: 2,

    email: "gmaccartney1@newsvine.com",
  },
  container
);
container();
