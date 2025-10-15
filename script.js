const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

//CONTACT

const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
  Email.send({
    SecureToken: "9d973810-7897-4be5-8bf4-265aecfffe2d",
    To: "rodrigo.ley_@hotmail.com",
    From: "rodrigo.ley_@hotmail.com",
    Subject: "Personal WebsitePage Message Contact",
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
  form.reset();
  return false;
});
