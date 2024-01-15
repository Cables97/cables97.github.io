/*
filterSelection("all")

// Execute the function and show all columns
function filterSelection(c) {
  var x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (let i = 0; i < x.length; i++) {
    addClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) removeClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/

/*
var summ = document.getElementsByClassName("icon");
var i;

for (i = 0; i < summ.length; i++) {
  summ[i].addEventListener("mouseover", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel 
    this.classList.add("btn-bounce");
    console.log('poopppe');
    this.classList.remove('btn-bounce');
  });
} 


// hide an element
document.getElementById("hide_0").style.display = "none";

// show a block element
document.getElementById("hide_1").style.display = "block";






*/


//-----------------------------------------------
//  Dom Variables
//-----------------------------------------------

const domDiscordBtn = document.getElementById('discord');
const domEmailBtn = document.getElementById('gmail');



//-----------------------------------------------
//  Event Listeners
//-----------------------------------------------

//event listener Arrays
const contactBtns = ['click', 'touch'];


contactBtns.forEach(event => domDiscordBtn.addEventListener(event, () => {
  contactCopy('Discord');
}))

contactBtns.forEach(event => domEmailBtn.addEventListener(event, () => {
  contactCopy('Email');
}))



function contactCopy(target){
  let isMobile = (window.innerWidth > 991) ? true : false ;

  let domTarget = '';
  let tip = '';
  let clip = '';

  switch(target){

    case 'Email':
      domTarget = domEmailBtn.querySelector('.tooltiptext');
      clip = 'calebcoliver@gmail.com';
    break;  

    case 'Discord':
      domTarget = domDiscordBtn.querySelector('.tooltiptext');
      clip = '.cables';
    break;  
    
    default:
    break;

  }

  navigator.clipboard.writeText(clip);

  domTarget.innerHTML = target + ' Copied!';
  console.log(target + ' copied to clipboard: calebcoliver@gmail.com');
  domTarget.style.visibility = 'visible'

  //reset tooltip text
  setTimeout(function(){
    domTarget.innerHTML ='Copy ' + tip;
    if(isMobile){
       domTarget.style.visibility = 'hidden';
    }
  }, 1000);

};











document.getElementById('cv-section').onscroll = function() {progressBar()};

function progressBar() {
  let winScroll = document.getElementById('cv-section').scrollTop;
  let height = document.getElementById('cv-section').scrollHeight - document.getElementById('cv-section').clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
} 
