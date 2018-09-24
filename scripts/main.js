myImage.onmouseout = function() {
  var divInPos = document.querySelector('#guide');
  pos.removeChild(divInPos);

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector("h2");


function myFunction() {
  var myName = prompt("Please, enter your name!");
  if(myName){
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my page, ' + myName+"!";}
};

if(localStorage.getItem('name')){
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my page, ' + storedName+"!";
};

myButton.onclick = function() {
  myFunction();
};
