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
*/



document.getElementById('discord').addEventListener("click", () => {
  navigator.clipboard.writeText('.cables');

  setTimeout(function(){
  document.getElementById('discord').querySelector('.tooltiptext').innerHTML ='Copy Username';
  }, 1000);

  document.getElementById('discord').querySelector('.tooltiptext').innerHTML ='User Copied!';
  console.log('username copied to clipboard: .cables');
})


document.getElementById('gmail').addEventListener("click", () => {
  navigator.clipboard.writeText('calebcoliver@gmail.com');

  setTimeout(function(){
  document.getElementById('gmail').querySelector('.tooltiptext').innerHTML ='Copy Email';
  }, 1000);

  document.getElementById('gmail').querySelector('.tooltiptext').innerHTML ='Email Copied!';
  console.log('email copied to clipboard: calebcoliver@gmail.com');
})


