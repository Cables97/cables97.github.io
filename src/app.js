//Blub extend toggle
let blurbs = document.querySelectorAll('.section-blurb');
blurbs.forEach(element => {
    element.addEventListener('click', () =>{
      expandingSection(element);
    })
});
function expandingSection(element){
  //clicking blurb expands it, fades in text. 
   let text = element.getElementsByClassName("blurb-text")[0];
   let expand = element.getElementsByClassName("more-info")[0];

  if(!element.classList.contains('expand')){
    console.log('grow');
    element.classList.add('expand')

    text.classList.add('active');
    text.style.display = 'inherit';
    expand.innerHTML = 'Hide Info...'
  }
  else{
    console.log('shrink');
    element.classList.remove('expand')

    //text.classList.add('inactive');
    text.style.display = 'none';
    expand.innerHTML = 'More Info...'
  }

  //clicking again shortens it, text disappears 
}





//modal button assigns
let modalBtns = document.querySelectorAll('.all-proj');
modalBtns.forEach(element => {
  element.addEventListener('click', ()=>{
    console.log('open modal');
    modalToggle();
  })
})
function modalToggle(){
  let modal = document.getElementById('modal');
  if(!modal.classList.contains('modal-active')){
    modal.classList.add('modal-active')

  } else{
    modal.classList.remove('modal-active');

  }
}

//reveal on scroll
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 400;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }





document.getElementById("discord").addEventListener('click', () =>{
  contactCopy('Discord');
})
document.getElementById("email").addEventListener('click', () =>{
  contactCopy('Email');
})

//contact info to clipboard
function contactCopy(contactInfo){
  //let isMobile = (window.innerWidth > 991) ? true : false ;

  let domTarget = document.getElementById('error-cursor');
  let clip = '';

  switch(contactInfo){

    case 'Email':
      clip = 'calebcoliver@gmail.com';
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



function parseForm(){

  let formName = document.getElementById('contact-form-name').value;
  let formEmail = document.getElementById('contact-form-email').value;
  let formMessage = document.getElementById('contact-form-message').value;



}


emailjs.init({
  publicKey: 'ulPbOaIOyWSrlW4l0',
});

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}