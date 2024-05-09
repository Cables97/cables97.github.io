//-------------------------
// Blurb Extend toggle
//-------------------------
let blurbs = document.querySelectorAll('.collapse');
blurbs.forEach(element => {
    element.addEventListener('click', () =>{
      expandingSection(element);
    })
});
function expandingSection(element){
  //clicking blurb expands it, fades in text. 
   let text = element.getElementsByClassName("blurb-text")[0];
   let expand = element.getElementsByClassName("more-info")[0].getElementsByClassName("hover-text")[0];

  if(!element.classList.contains('expand')){
    console.log('grow');
    element.classList.add('expand')

    text.classList.add('active');
    text.style.display = 'inherit';
    expand.innerText = 'Hide Info...'
  }
  else{
    console.log('shrink');
    element.classList.remove('expand')

    //text.classList.add('inactive');
    text.style.display = 'none';
    expand.innerText = 'More Info...'
  }

  //clicking again shortens it, text disappears 
}

//-------------------------
// Modal Buttons
//-------------------------
if(document.getElementById('modal')){
const certBtn = document.getElementById("cert-btn");
const modal = document.getElementById("modal");
const modalbg = document.getElementById("modal-bg");
const modalX = document.getElementById("modal-x");

certBtn.addEventListener("click", () => {

  if(modal.style.display = 'none'){
    modal.style.display = 'inherit'
  } else {
    modal.style.display = 'none'
  }
})
modalbg.addEventListener("click", () => {
  console.log('boop')
  modal.style.display = 'none'
})
modalX.addEventListener("click", () => {
  console.log('boop')
  modal.style.display = 'none'
})
}


//-------------------------
// Scroll Reveal
//-------------------------
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 200;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
}


//-------------------------
// Error Popup
//-------------------------

function errorBoxPop(strError, strColor) {
  let errorBox = document.getElementById('error-pop');
  let errorMsgBox = errorBox.querySelectorAll('p')[0];
  errorMsgBox.innerHTML = strError;
  errorMsgBox.style.color = strColor;
  errorBox.classList.add('popup');

  setTimeout(() => {
    errorBox.classList.remove('popup');
  }, 5000);
}

//-------------------------
// Contact form
//-------------------------

function clearForm(){
  document.getElementById("contact-form-name").value = "";
  document.getElementById("contact-form-email").value = "";
  document.getElementById("contact-form-message").value = "";
}

function verifyForm(){
  let name = document.getElementById("contact-form-name");
  let email = document.getElementById("contact-form-email");
  let message = document.getElementById("contact-form-message");

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailCheck = emailRegex.test(email.value);

  if(name.value === ""){
    return false;
  }

  if(!emailCheck){
    return false;
  }
  
  if(message.value === ""){
    return false;
  }

  return true;
}

emailjs.init({
  publicKey: 'ulPbOaIOyWSrlW4l0',
});


if(document.getElementById('contact-form')){
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let verify = verifyForm();
    if(verify){
      // these IDs from the previous steps
      emailjs.sendForm('service_gop0d1m', 'contact_form', this)
          .then(() => {
              console.log('SUCCESS!');
              errorBoxPop("Success! Email Sent!", "var(--text-color)");
              clearForm();
          }, (error) => {
              console.log('FAILED...', error);
              errorBoxPop("An error occurred, please try again later", "var(--text-color)");
          });
    } else {
      errorBoxPop("There is an issue with the input information", "var(--text-color)");
    }


    
});

}



//-------------------------
// Contact Buttons
//-------------------------
if(document.getElementById("discord")){
  document.getElementById("discord").addEventListener('click', () => { contactCopy('Discord') })
}


if(document.getElementById("email")){
document.getElementById("email").addEventListener('click', () => { contactCopy('Email') })
}

//contact info to clipboard
function contactCopy(contactInfo){
  //let isMobile = (window.innerWidth > 991) ? true : false ;

  let domTarget = document.getElementById('error-cursor');
  let clip = '';

  switch(contactInfo){

    case 'Email':
      clip = 'calebuniversedev@gmail.com';
    break;  

    case 'Discord':
      clip = '.cables';
    break;  
    
    default:
    break;
  }
  
  navigator.clipboard.writeText(clip);
  console.log(contactInfo + ' copied to clipboard: ' + clip);

  let message = contactInfo + ' Copied!';
  domTarget.innerHTML = message;

  domTarget.style.display = 'inherit';
  setTimeout( ()=>{
    domTarget.style.display = 'none';
  },2000)

};

//popup tracking  
let follow = document.getElementById('error-cursor');
document.addEventListener('mousemove', (e) => {
    follow.style.left = e.pageX + 20 + 'px';
    follow.style.top = e.pageY - 40 + 'px';
});

//-------------------------
// Light / Dark Mode
//-------------------------

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
const darkBtn = document.getElementById("dark-btn")

  if (currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
    darkBtn.checked = true;
  } else if (currentTheme == "light") {
    document.body.classList.toggle("light-mode");
    darkBtn.checked = false;
  }

  darkBtn.addEventListener('click', ()=>{
    document.body.classList.toggle("dark-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";

    console.log(theme);
    localStorage.setItem("theme", theme);
  });


//-------------------------
// Project Buttons
//-------------------------

const projects = document.querySelectorAll(".project-wrapper");
console.log(projects)
projects.forEach(el => {
  let wrapper = el.getElementsByClassName("proj-imgs")[0];
  let imgBtns = wrapper.querySelectorAll(".img-btn");
  console.log(imgBtns)
  
  imgBtns[0].addEventListener("click" , () =>{
    toggleProjectImages('desktop', wrapper)
  })
  imgBtns[1].addEventListener("click" , () =>{
    toggleProjectImages('mobile', wrapper)
  })

});

console.log('oops')

function toggleProjectImages(platform, wrapperElement){
  let desktopImgs = wrapperElement.querySelectorAll(".desktop")[0];
  let mobileImgs = wrapperElement.querySelectorAll(".mobile")[0];
  console.log('oops')
  switch(platform){
    case "mobile":
      if(mobileImgs.style.display = "none"){
        desktopImgs.style.display = "none"
        mobileImgs.style.display = "inherit"
      }
      break;
      case "desktop":
        if(desktopImgs.style.display = "none"){
          mobileImgs.style.display = "none"
          desktopImgs.style.display = "inherit"
        }
    
  }

}








