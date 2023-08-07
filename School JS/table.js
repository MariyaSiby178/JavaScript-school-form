let info = [];
let editText;
let obj = {};
function tableFunction() {
  window.location.href = "form.html";
}

function formbackFunction() {
  window.location.href = "index.html";
}

function getList() {
  editText = undefined;
  let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

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
    v += "<td>" + info[i].number + "</td>";
    v += "<td>" + info[i].qua + "</td>";
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
  let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";
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
  window.location.href = "form.html?id=" + id;
}
