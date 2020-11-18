var addBtn = document.getElementById("add")
var delBtn = document.getElementById("delete")
var orgBtn = document.getElementById("organize")

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
  var txt = document.createTextNode("\u00D7");
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
