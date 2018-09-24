var myButton = document.querySelector('button');
var myHeading = document.querySelector("h2");


function myFunction() {
  document.getElementById('portfolio').scrollIntoView();
};

if(localStorage.getItem('name')){
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my page, ' + storedName+"!";
};

myButton.onclick = function() {
  myFunction();
};


