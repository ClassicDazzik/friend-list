function addFriend() {
  var textField = document.getElementById("txtfield").value;
  var li = document.createElement("li");
  var t = document.createTextNode(textField);
  li.appendChild(t);
  if (textField === '') {
    alert("The input field is empty!");
  } else {
    document.getElementById("list").appendChild(li);
  }
}

function delFriend() {
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");
  switching = true;

  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");

    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}