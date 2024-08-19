// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

function sendMail(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Collect form data
  var params = {
    from_name: document.querySelector("#from_name").value,
    from_email: document.querySelector("#from_email").value,
    message: document.querySelector("#message").value,
  };

  const serviceID = "service_ch3cdet"; // Email service ID
  const templateID = "template_0c0ue9e"; // Email template ID

  // Send email
  emailjs.send(serviceID, templateID, params)
    .then(res => {
      alert("Email submitted successfully");
      // Optionally clear the form
      document.querySelector("#from_name").value = '';
      document.querySelector("#from_email").value = '';
      document.querySelector("#message").value = '';
    })
    .catch(err => {
      console.error("Failed to send email:", err);
      alert("Failed to send email. Please try again.");
    });
}