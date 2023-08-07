let info = [];
let editText;
let obj = {};
function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var gender = document.getElementById("gender").value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(gender);

  if (name == "") {
    document.getElementById("name_err").innerHTML = "name required";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("email_err").innerHTML = "email required";
  } else {
    document.getElementById("email_err").innerHTML = "";
  }

  if (phone == "") {
    document.getElementById("phone_err").innerHTML = "number required";
  } else {
    document.getElementById("phone_err").innerHTML = "";
  }

  if (gender == "") {
    document.getElementById("gender_err").innerHTML = "number required";
  } else {
    document.getElementById("gender_err").innerHTML = "";
  }

  if (name == "" || email == "" || phone == "" || gender == "") {
    return false;
  }

  obj["name"] = name;
  obj["email"] = email;
  obj["phone"] = phone;
  obj["gender"] = gender;

  if (editText != undefined) {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/employee";

    fetch(url + "/" + editText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("list.html");
        // getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/employee";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("list.html");
        // getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("gender").value = "";
}


function onLoader() {
  // getList();
  Edit();
}

// function addTable() {
//   var v = "";
//   editText = undefined;
//   console.log(info);
//   for (i = 0; i < info.length; i++) {
//     v += "<tr>";
//     v += "<td>" + info[i].name + "</td>";
//     v += "<td>" + info[i].email + "</td>";
//     v += "<td>" + info[i].phone + "</td>";
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

function insertTable() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var gender = document.getElementById("gender").value;

  let details = { name, email, phone, gender };
  console.log(details);

  addTable();
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
  // editText = id;
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  if (id) {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/employee";

    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        info = string;
        document.getElementById("name").value = info.name;
        document.getElementById("email").value = info.email;
        document.getElementById("phone").value = info.phone;
        document.getElementById("gender").value = info.gender;

        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
