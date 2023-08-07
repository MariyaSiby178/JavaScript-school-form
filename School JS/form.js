let info = [];
let editText;
let obj = {};
function BackFunction() {
  window.location.replace("table.html");
}
function submitFunction() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var qua = document.getElementById("qua").value;
  var gender = document.getElementById("gender").value;

  if (name == "") {
    document.getElementById("name_err").innerHTML = "Name required";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }

  if (number == "") {
    document.getElementById("number_err").innerHTML = "Number required";
  } else {
    document.getElementById("number_err").innerHTML = "";
  }

  if (qua == "") {
    document.getElementById("qua_err").innerHTML = "Qualification required";
  } else {
    document.getElementById("qua_err").innerHTML = "";
  }

  if (gender == "") {
    document.getElementById("gender_err").innerHTML = "Gender required";
  } else {
    document.getElementById("gender_err").innerHTML = "";
  }

  if (name == "" || qua == "" || number == "" || gender == "") {
    return false;
  }

  obj["name"] = name;
  obj["number"] = number;
  obj["qua"] = qua;
  obj["gender"] = gender;

  if (editText != undefined) {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

    fetch(url + "/" + editText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("table.html");
        // getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("table.html");
        // getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("qua").value = "";
  document.getElementById("gender").value = "";
}

// function addTable() {
//   var v = "";
//   editText = undefined;
//   console.log(info);
//   for (i = 0; i < info.length; i++) {
//     v += "<tr>";
//     v += "<td>" + info[i].name + "</td>";
//     v += "<td>" + info[i].number + "</td>";
//     v += "<td>" + info[i] qua + "</td>";
//     v += "<td>" + info[i].gender + "</td>";
//     v +=
//       '<td><button class="btn btn-danger me-2" onclick="Edit(' +
//       info[i].id +
//       ')">Edit</button><button class="btn btn-primary" onclick="Delete(' +
//       info[i].id +
//       ')">Delete</button></td>';
//   }

//   document.getElementById("displayArea").innerHTML = v;
// }

// function insertTable() {
//   var name = document.getElementById("name").value;
//   var number = document.getElementById("number").value;
//   var qua = document.getElementById("qua").value;
//   var gender = document.getElementById("gender").value;

//   let details = { name, number, qua, gender };
//   console.log(details);

//   addTable();
// }
function onLoader() {
  //   getList();
  Edit();
}

// function Delete(id) {
//   let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/employee";
//   fetch(url + "/" + id, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((Result) => Result.json())
//     .then((string) => {
//       console.log(string);
//       getList();
//       console.log(`Title of our response :  ${string.name}`);
//     })
//     .catch((errorMsg) => {
//       console.log(errorMsg);
//     });
// }

function Edit() {
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  editText = id;
  if (id) {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        info = string;
        document.getElementById("name").value = info.name;
        document.getElementById("number").value = info.number;
        document.getElementById("qua").value = info.qua;
        document.getElementById("gender").value = info.gender;

        console.log(`Title of our response :  ${info.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
