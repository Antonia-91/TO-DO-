console.log("hej");
let elements = [];

// add elements
function addElement() {
  if (document.querySelector(".addText").value.trim() != "") {
    elements.push(document.querySelector(".addText").value.trim());
    console.log(elements);
    //alert(elements);
    display();
  }
}

// display
function display() {
  document.querySelector(".list").innerHTML = "";
  for (let i = 0; i < elements.length; i++)
    document.querySelector(
      ".list"
    ).innerHTML += `<center><div class="element"> ${
      elements[i]
    } <img id="check" src="/checkmark-24-512.png" onclick="strike(${[
      i,
    ]})"> <img id="trach" src="/trash-512.webp" onclick="del(${[i]})" </div>`;
}

// delete
function del(index) {
  console.log("click trash");
  elements.splice(index, 1);
  console.log(elements);
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
  display();
}
