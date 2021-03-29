console.log("hej");
let elements = [];

//local Storage
window.onload = function () {
  if (JSON.parse(localStorage.getItem("todo-key")) !== null) {
    //elements = JSON.parse(localStorage.getItem("todo-key"));
    //console.log("elements", elements);
    display();
  }
};

// add elements
function addElement() {
  if (document.querySelector(".addText").value.trim() != "") {
    elements.push(document.querySelector(".addText").value.trim());
    console.log(elements);

    // local Storage
    console.log(localStorage.getItem("todo-key"));
    localStorage.setItem("todo-key", JSON.stringify(elements));

    display();
  }
}

// display
function display() {
  elements = JSON.parse(localStorage.getItem("todo-key"));

  document.querySelector(".list").innerHTML = "";
  console.log(elements);

  elements.forEach(function (index, i) {
    document.querySelector(
      ".list"
    ).innerHTML += `<center><div class="element"> ${index} <img id="check" src="/checkmark-24-512.png" onclick="strike(${i})"> <img id="trach" src="/trash-512.webp" onclick="del(${i})" </div>`;
  });
}

// delete
function del(index) {
  console.log("click trash");
  elements.splice(index, 1);
  console.log(elements);
  // local Storage
  localStorage.setItem("todo-key", JSON.stringify(elements));

  display();
}

// strike
function strike(index) {
  if (elements[index].includes("<strike>")) {
    elements[index] = elements[index].replace("<strike>", "");
    elements[index] = elements[index].replace("</strike>", "");
  } else {
    elements[index] = "<strike>" + elements[index] + "</strike>";
  }
  // local Storage
  localStorage.setItem("todo-key", JSON.stringify(elements));

  display();
}
