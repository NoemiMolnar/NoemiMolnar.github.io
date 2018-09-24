var myImage = document.querySelector('img');

myImage.onmousedown = function() {
      myImage.style.height = '500px';
      var divInPos = document.querySelector('#guide');
      divInPos.textContent = '';
}

myImage.onmouseup = function() {
      myImage.style.height = '180px';
}

var pos = document.querySelector('.pos');

myImage.onmouseover = function(){
  var div = document.createElement('div');
  div.textContent = 'Click on the picture to see it in a bigger size!';
  div.id = 'guide';
  div.style.margin = '0 0 0 25px';


  pos.appendChild(div);
}

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
