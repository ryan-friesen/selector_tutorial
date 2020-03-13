function onloadFunctions() {
  assignValues();
}

function menuOneValue() {
  let a = document.getElementById("section-one-menu");
  return a;
}

function menuTwoValue() {
  let a = document.getElementById("section-two-menu");
  return a;
}

function outputAttribute() {
  let a = menuOneValue(),
    b = document.getElementById("section-one-text");

  switch (a.value) {
    case "id":
      alert(b.id);
      break;
    case "nodename":
      alert(b.nodeName);
      break;
    case "fontsize":
      alert(b.style.fontSize);
      break;
    case "inline-color":
      alert(b.style.color);
      break;
    case "color":
      getStyle(b);
      break;
    default:
      break;
  }
}

function getStyle(b) {
  let a = window.getComputedStyle(b),
    c = menuOneValue();
  alert(a.getPropertyValue(c.value));
}

function sectionTwoMenu() {
  let a = document.getElementById("section-two-menu"),
    b = a.value,
    c = returnListOne();
    d = returnListTwo();

  switch (b) {
    case "reverse-list-1":
      reverseList(c);
      break;
    case "reverse-list-2":
      reverseList(d);
      break;
    case "negative":
      reverseColors(c);
      break;
    case "reset":
      resetList(c);
      break;
    default:
      break;
  }
}

function returnListOne() {
  let a = document.querySelectorAll("#section-two-list-1 > li");
  return a;
}

function returnListTwo() {
  let a = document.querySelectorAll("#section-two-list-2 > li");
  return a;
}

function reverseList(a) {
  let array = [];
  for (i = a.length - 1; i >= 0; i--) {
    array.push([a[i].innerHTML, a[i].value]);
    a[i].innerHTML = "";
  }
  for (i = 0; i < a.length; i++) {
    a[i].innerHTML = array[i][0];
    a[i].value = array[i][1];
  }

}

function reorderList(event) {
  let b = document.getElementById("section-two-list-2");
  b.innerHTML +=
    "<li value='" +
    event.target.value +
    "'>" +
    event.target.innerHTML +
    "</li>";
  event.target.remove();
}

function undoReorderList(event) {
  let a = document.getElementById("section-two-list-1");
  a.innerHTML +=
    "<li value='" +
    event.target.value +
    "'>" +
    event.target.innerHTML +
    "</li>";
  event.target.remove();
}

function assignValues() {
  let a = returnListOne();
  for (i = 0; i < a.length; i++) {
    a[i].value = i + 1;
  }
}

function getLiObjects() {

  // collect all li elements in the document

  let a = document.querySelectorAll("#section-two-container li");

  let array = [];

  // use a for loop to successively cycle through the collected elements according to the value initially

  for (i = 1; i <= a.length; i++) {
    try {
      let c = document.querySelectorAll(
        '#section-two-container li[value="' + i + '"]'
      );
      array.push(c[0]);
    } catch {}
  }
  return array;
}

function resetList() {
  let array = getLiObjects();
  let a = document.getElementById("section-two-list-1"),
    b = document.getElementById("section-two-list-2");
  a.innerHTML = "";
  b.innerHTML = "";
  a.innerHTML += '<ul id="section-two-list-1" onclick="reorderList(event);">';
  for (i = 0; i < array.length; i++) {
    a.innerHTML +=
      '<li value="' + array[i].value + '">' + array[i].innerText + "</li>";
  }
}

function dragAndDrop(event) {
  let element = event.target,
  parentElement = event.target.parentNode;
  console.log(element + " " + parentElement);
const containers = document.getElementsByClassName('holder');
for(const container of containers) {
  container.addEventListener("dragover", dragover)
  container.addEventListener("dragenter", dragenter)
  container.addEventListener("drop", drop)
}

function dragover(event) {
  event.preventDefault()
}
function dragenter(event) {
  event.preventDefault()
}
function drop() {
  this.append(element)
}
}