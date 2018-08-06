var tab = document.querySelectorAll("td");
var restart = document.querySelector("#b");

function clearBoard(){
  for (var i = 0; i < tab.length; i++) {
    tab[i].textContent = " ";
  }
}

restart.addEventListener("click", clearBoard);

function changeMarker(){
  if (this.textContent === "") {
    this.textContent = "X";
  }else if (this.textContent === "X") {
    this.textContent = "O";
  }else {
    this.textContent = "";
  }
}

for (var i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click",changeMarker)
}
