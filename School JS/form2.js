let info = [];
let editText;
let obj = {};
function Back_Function() {
  window.location.replace("table2.html");
}
function submit_Function() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var dept = document.getElementById("dept").value;
  var gender = document.getElementById("gender").value;
  var year = document.getElementById("year").value;

  if (name == "") {
    document.getElementById("name_err").innerHTML = "Name required";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }

  if (age == "") {
    document.getElementById("age_err").innerHTML = "Age required";
  } else {
    document.getElementById("age_err").innerHTML = "";
  }

  if (dept == "") {
    document.getElementById("dept_err").innerHTML = "Department required";
  } else {
    document.getElementById("dept_err").innerHTML = "";
  }

  if (gender == "") {
    document.getElementById("gender_err").innerHTML = "Gender required";
  } else {
    document.getElementById("gender_err").innerHTML = "";
  }

  if (year == "") {
    document.getElementById("year_err").innerHTML = "Year required";
  } else {
    document.getElementById("year_err").innerHTML = "";
  }

  if (name == "" || dept == "" || age == "" || gender == "" || year == "") {
    return false;
  }

  obj["name"] = name;
  obj["age"] = age;
  obj["dept"] = dept;
  obj["gender"] = gender;
  obj["year"] = year;

  if (editText != undefined) {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/student";

    fetch(url + "/" + editText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("table2.html");
        // getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/student";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("table2.html");
        // getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("dept").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("year").value = "";
}

// function addTable() {
//   var v = "";
//   editText = undefined;
//   console.log(info);
//   for (i = 0; i < info.length; i++) {
//     v += "<tr>";
//     v += "<td>" + info[i].name + "</td>";
//     v += "<td>" + info[i].age + "</td>";
//     v += "<td>" + info[i] dept + "</td>";
//     v += "<td>" + info[i].gender + "</td>";
//     v +=
//       '<td><button class="btn btn-danger me-2" onclick="Edit(' +
//       info[i].id +
//       ')">Edit</button><button class="btn btn-primary" onclick="Delete(' +
//       info[i].id +
//       ')">Delete</button></td>';
//   }

//   document.getElementById("display_Area").innerHTML = v;
// }

// function insertTable() {
//   var name = document.getElementById("name").value;
//   var age = document.getElementById("age").value;
//   var dept = document.getElementById("dept").value;
//   var gender = document.getElementById("gender").value;

//   let details = { name, age, dept, gender };
//   console.log(details);

//   addTable();
// }
function on_Loader() {
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
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/student";

    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        info = string;
        document.getElementById("name").value = info.name;
        document.getElementById("age").value = info.age;
        document.getElementById("dept").value = info.dept;
        document.getElementById("gender").value = info.gender;
        document.getElementById("year").value = info.year;

        console.log(`Title of our response :  ${info.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
