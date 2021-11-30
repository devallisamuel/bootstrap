// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.querySelector(".myNavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// footer subscription
let subForm = document.querySelector('.subscribe-submit');
let subInput = document.querySelector('.sub-form');
// subside newsletter
let subscribeInput = document.querySelector('.subscribe-email');
let subscribeInputButton = document.querySelector('.subscribe-email-button');
// form button
let formButton = document.querySelector('.form-button');
let formName = document.querySelector('.form-name');
let formNameText = document.querySelector('.form-name-text');
let formMail = document.querySelector('.form-mail');
let formMailText = document.querySelector('.form-mail-text');
let formPhone = document.querySelector('.form-phone');
let formPhoneText = document.querySelector('.form-phone-text');
let formSelectText = document.querySelector('.form-select-text');
let formSelect = document.querySelector('.form-select');
let formDob = document.querySelector('.form-dob');
let formDobText = document.querySelector('.form-dob-text');
let formDesc = document.querySelector('.form-desc');
let formDescText = document.querySelector('.form-desc-text');
let section = document.querySelector('.numbers');
let hasEntered = false;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove('sticky');
  }
}

// validation
function subscribe ()  {
    // event.preventDefault();
    if (subInput.value === "") {
        document.querySelector(".error-subscribe").innerHTML = "Input must contain valid mail";
        
    }
}
subForm.addEventListener('click', subscribe);
subscribeInputButton.addEventListener('click', function () {
  if(subscribeInput.value === "") {
    document.querySelector(".error-subscribe-mail").innerHTML = "Input must contain valid mail";
  }
});
formButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(formName.value == ""){
    formNameText.innerHTML = "this field is required";
  }
  if(formPhone.value == "" ){
    formPhoneText.innerHTML = "this field is required";
  }
  if(formSelect.value == "choose subject"){
    formSelectText.innerHTML = "this field is required";
  }
  if(formMail.value == ""){
    formMailText.innerHTML = "this field is required";
  }
  if(formDob.value == ""){
    formDobText.innerHTML = "this field is required";
  }
  if(formDesc.value == ""){
    formDescText.innerHTML = "this field is required";
  }
})

window.addEventListener('scroll', (e) => {
	var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

	if (shouldAnimate && !hasEntered) {
  	hasEntered = true;
    
    $('.value').each(function () {
    	$(this).prop('Counter',0).animate({
        Counter: $(this).text()
    	}, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
   		});
    });

  }
});