function menuOneValue() {
  let a = document.getElementById("section-one-menu");
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
    c = returnList();

  switch (b) {
    case "list-all":
      reverseList(c);
      break;
    case "negative":
      reverseColors(c);
      break;
    default:
      break;
  }
}

function returnList() {
  let a = document.querySelectorAll("#section-two-list > li");
  return a;
}

function reverseColors(a) {
  for (i = 0; i < a.length; i++) {
    let b = getComputedStyle(a[i]),
      c = b.getPropertyValue("color"),
      d = b.getPropertyValue("background");
    if (c === "rgb(0, 0, 0)") {
      a[i].style.color = "rgb(255, 255, 255)";
      a[i].style.background = "rgb(0, 0, 0)";
    } else {
      a[i].style.color = "rgb(0, 0, 0)";
      a[i].style.background = "rgb(255, 255, 255)";
    }
  }
}

function reverseList(a) {
  let array = [];
  for (i = a.length - 1; i >= 0; i--) {
    array.push(a[i].innerHTML);
    a[i].innerHTML = "";
  }
  for (i = 0; i < a.length; i++) {
    a[i].innerHTML = array[i];
  }
}

function reorderList(event) {
  let a = document.getElementById("section-two-output");
  a.innerHTML += "<li>" + event.target.innerHTML + "</li>";
  event.target.remove();
}

function undoReorderList(event) {
  let a = document.getElementById("section-two-list");
  a.innerHTML += "<li>" + event.target.innerHTML + "</li>";
  event.target.remove();
}
