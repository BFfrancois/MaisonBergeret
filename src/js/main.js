
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBBkcmsv6ffOlxsIQ8vRUwjdb5sJKeXtak",
    authDomain: "maison-bergeret.firebaseapp.com",
    databaseURL: "https://maison-bergeret.firebaseio.com",
    projectId: "maison-bergeret",
    storageBucket: "maison-bergeret.appspot.com",
    messagingSenderId: "910297056932"
  };
  firebase.initializeApp(config);

// Reference massage collection
const messageRef = firebase.database().ref('messages');




$(function() {
// Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});


$(document).on('click', '[data-toggle="lightbox"]', function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});

$('.slider').slick({
  infinite:true,
  slideToShow:1,
  slideToScroll:1
});

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


//Submit form
function submitForm(e){
  e.preventDefault();
  //get values
  let firstName = getInputVal('firstName');
  let lastName = getInputVal('lastName');
  let email = getInputVal('email');
  let subject = getInputVal('subject');
  let message = getInputVal('message');

//Save Message
  saveMessage(firstName, lastName, email, subject, message);

//Show alert
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
  },3000);
  //Clear form
  document.getElementById('contactForm').reset();
}

//function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//save message to firbase
function saveMessage(firstName, lastName, email, subject, message){
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    subject: subject,
    message: message,
  });
}


