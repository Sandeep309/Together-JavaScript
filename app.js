// STICKY NAVIGATION
let navSticky = () => {
  var header = document.getElementById("myheader");
  var sticky = header.offsetTop;

  window.onscroll = function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
};
navSticky();

// GO TO TOP BUTTON
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
});

$("#back-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    400
  );
});

// SEARCH FUNTION
$(document).ready(function () {
  $("#srchInpt").keyup(function () {
    let a = $(this).val().toLowerCase();
    $(".post").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(a) > -1);
    });
  });
});

// Tab hide and show
function showLogIn() {
  const logCard = document.querySelector("#loginCard");
  const signCard = document.querySelector("#signupCard");
  const logBtn = document.querySelector("#loginBtn");
  const signBtn = document.querySelector("#signupBtn");

  signCard.classList.add("d-none");
  logCard.classList.remove("d-none");

  logBtn.classList.add("text-light");
  logBtn.classList.remove("text-muted");
  signBtn.classList.remove("text-light");
  signBtn.classList.add("text-muted");
}
function showsignUp() {
  const logCard = document.querySelector("#loginCard");
  const signCard = document.querySelector("#signupCard");
  const logBtn = document.querySelector("#loginBtn");
  const signBtn = document.querySelector("#signupBtn");

  signCard.classList.remove("d-none");
  logCard.classList.add("d-none");

  logBtn.classList.remove("text-light");
  logBtn.classList.add("text-muted");
  signBtn.classList.add("text-light");
  signBtn.classList.remove("text-muted");
}

// LOGIN VALIDATION
function logInVaidation() {
  const logUserId = document.logForm.logUser.value;
  const passId = document.logForm.logPass.value;

  const userIdFormat = /^[a-zA-Z0-9_-]{5,10}$/;
  const passIdFormat = /^[a-zA-Z\d].{8,10}$/g;

  if (logUserId.match(userIdFormat)) {
    var status = true;
  } else {
    alert("You have entered an wrong id !");
    var status = false;
  }

  if (passId.match(passIdFormat)) {
    var status = true;
  } else {
    alert("You have entered an wrong password !");
    var status = false;
  }
  return status;
}

// SIGN UP VALIDATION
function signUpVaidation() {
  const usr = document.signForm.signUser.value;
  const email = document.signForm.signEmail.value;
  const passcode = document.signForm.signPass.value;

  const usrFormat = /^[a-zA-Z0-9_-]{5,10}$/;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passcodeFormat = /^[a-zA-Z\d].{8,10}$/g;

  if (usr.match(usrFormat)) {
    var Rstatus = true;
  } else {
    alert("Please enter your name.");
    var Rstatus = false;
  }

  if (email.match(mailFormat)) {
    var Rstatus = true;
  } else {
    alert("Please enter a valid e-mail address.");
    var Rstatus = false;
  }

  if (passcode.match(passcodeFormat)) {
    var Rstatus = true;
  } else {
    alert("Please enter your password");
    var Rstatus = false;
  }

  return Rstatus;
}

// hide and show password
function showBtn(e) {
  const passInput = document.querySelector("#passInput");

  if (passInput.type === "password") {
    passInput.type = "text";
    e.target.classList.add("fa-eye-slash");
    e.target.classList.remove("fa-eye");
  } else {
    passInput.type = "password";
    e.target.classList.remove("fa-eye-slash");
    e.target.classList.add("fa-eye");
  }
}

// MODAL BOX
const modal = document.getElementById("modalbox");
const mbtn = document.getElementById("modalbtn");

mbtn.onclick = function () {
  modal.style.display = "block";
};
function closebtn() {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// INPUT FILE PREVIEW
var loadFile = function (event) {
  var output = document.getElementById("output");
  output.src = URL.createObjectURL(event.target.files[0]);
};

var resetFile = function () {
  this.output.src = "";
  document.getElementById("txtArea").value = "";
};

// LIKE AND DISLIKE BTN
like = (e) => {
  let a = 0;
  const like = e.target.classList;
  const count = e.target.nextElementSibling;
  like.toggle("fas");
  if (like.contains("fas")) {
    a++;
    count.innerHTML = a;
  } else {
    count.innerHTML = 0;
  }
};
