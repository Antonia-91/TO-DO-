const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", addElement);

//global eventlistener
document.querySelector("body").addEventListener("click", (event, index) => {
  if (event.target.matches(".trach")) {
    console.log(event.target);

    elements.splice(index, 1);

    // local Storage - set
    localStorage.setItem("newKey", JSON.stringify(elements));

    // prita igen
    display();
  }

  if (event.target.matches(".check")) {
    // console.log(event.target);
    // console.log(event.target.parentElement);
    const check = event.target.parentElement;
    check.classList.toggle("completed");

    // local Storage - set
    localStorage.setItem("newKey", JSON.stringify(elements));

    //prita igen
    //display();
  }
});

// skapa en tom array
let elements = [];

// LOCAL STORGE- varje gång sidan laddas om. hämta från LS och parse OM det finns något i LS
window.onload = function () {
  if (JSON.parse(localStorage.getItem("newKey")) != null) {
    console.log("det finns vädern i LS");
    // call display function
    display();
  } else {
    console.log("det finns Inget i LS");
  }
};

// function som samlar in värdet från input, sätter det i min tomma array.. anropa på functionen som soretrar värden i min array och lopar igenom och printar i DOM
function addElement() {
  let value = document.querySelector(".addText").value.trim();
  if (value != "") {
    elements.push(value);

    // local storage - set
    localStorage.setItem("newKey", JSON.stringify(elements));

    // call display function
    display();
  }
}

//DISPALY
function display() {
  // local stogare - get
  elements = JSON.parse(localStorage.getItem("newKey"));

  // töm först
  document.querySelector(".list").innerHTML = "";

  //loopa genom elements
  elements.forEach((element, i) => {
    document.querySelector(".list").innerHTML += `
    <div class="element"> 
    ${element} <img class="check" id="${i}" src="/checkmark-24-512.png"/>
    <img class="trach"  id="${i}"src="/trash-512.webp" />
    </div>
    `;
  });
  document.querySelector(".addText").value = "";
}
