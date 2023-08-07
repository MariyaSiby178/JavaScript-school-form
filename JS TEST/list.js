let info = [];
let editText;
let obj = {};
function getList() {
  let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/employee";

  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      info = string;
      addTable();
      console.log(`Title of our response :  ${info.name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}

function onLoader() {
  getList();
}

function addTable() {
  var v = "";
  editText = undefined;
  console.log(info);
  for (i = 0; i < info.length; i++) {
    v += "<tr>";
    v += "<td>" + info[i].name + "</td>";
    v += "<td>" + info[i].email + "</td>";
    v += "<td>" + info[i].phone + "</td>";
    v += "<td>" + info[i].gender + "</td>";
    v +=
      '<td><button class="btn btn-danger me-2" onclick="Edit(' +
      info[i].id +
      ')">Edit</button><button class="btn btn-primary" onclick="Delete(' +
      info[i].id +
      ')">Delete</button></td>';
  }

  document.getElementById("displayArea").innerHTML = v;
}

function Delete(id) {
  let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/employee";
  fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      getList();
      console.log(`Title of our response :  ${string.name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}

function Edit(id) {
  editText = id;
  window.location.href = "index.html?id=" + id;
  // let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/employee";

  // fetch(url + "/" + id, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((Result) => Result.json())
  //   .then((string) => {
  //     console.log(string);
  //     info = string;
  //     document.getElementById("name").value = info.name;
  //     document.getElementById("email").value = info.email;
  //     document.getElementById("phone").value = info.phone;
  //     document.getElementById("gender").value = info.gender;

  //     console.log(`Title of our response :  ${string.name}`);
  //   })
  //   .catch((errorMsg) => {
  //     console.log(errorMsg);
  //   });
}
