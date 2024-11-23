// Button menu toggle
const ButtonMenu = document.getElementById('button-menu');
const navbar = document.getElementById('navbar-item');
const stick = document.querySelectorAll('.Stick');

if (ButtonMenu && navbar && stick) {
  ButtonMenu.addEventListener('click', function() {
    stick.forEach(f => {
      f.classList.toggle('active');
    });
    navbar.classList.toggle('slide');
  });
}
// DARK MODE
// document.addEventListener("DOMContentLoaded", () => {
//   const mode = document.getElementById("mode");
//   const icon = mode.querySelector(".icon i");
//   const navbarmode = document.getElementById("navbar");
//   const stickMode = document.querySelector('.menu-toggle-button');
//   const BodyMode = document.querySelector('body')
//   const HomeMode = document.querySelector('.home');
//   const subtitleMode = document.querySelectorAll('.subtitle-card')
  
  
//   mode.addEventListener('click', function(){
//       navbarmode.classList.toggle('active');
//       stickMode.classList.toggle('active');
//       BodyMode.classList.toggle('active');
//       HomeMode.classList.toggle('active');
//       // subtitleMode.classList.toggle('active');
  
//       if (icon.classList.contains("fa-sun")) {
//           icon.classList.replace("fa-sun", "fa-moon");
//           icon.style.color = "#FFF"; // Warna putih untuk bulan
//       } else {
//           icon.classList.replace("fa-moon", "fa-sun");
//           icon.style.color = "#FFD43B"; //warna kuning untuk matahari
//       }
//   })
// });

// DARK MODE
// Login button redirect
const loginButton = document.querySelector('.Login-Button');
const secondaryButton = document.querySelector('.button-secondary');
const buttonSecondLogin = document.getElementById('Login');

if (loginButton) {
  loginButton.addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
  });
}

if (secondaryButton) {
  secondaryButton.addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
  });
}

if (buttonSecondLogin) {
  buttonSecondLogin.addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
  });
}

// Hubungi Kami Modal
const hubungiKamiButtons = document.querySelectorAll('.hubungi-kami');
const modal = document.getElementById('modal-content');
const closeModal = document.querySelector('.modal-close');
const closeButton = document.querySelector('.button-close');

if (hubungiKamiButtons && modal && closeModal && closeButton) {
  // Event Listener untuk membuka modal pada setiap tombol "Hubungi Kami"
  hubungiKamiButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });

  // Event Listener untuk menutup modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}


// Animation scroll
// ScrollReveal({ 
//   reset: false,
//   distance: '200px',
//   duration: 2000,
//   delay: 200
// });

// ScrollReveal().reveal('.home', { origin: 'left' });
// ScrollReveal().reveal('.home-container-side', { origin: 'left' });

// Scroll behavior
// 

// Function to add new user and update counters
function addNewUser() {
  const userCountElement = document.getElementById("user-count");
  const certificateCountElement = document.getElementById("certificate-count");
  const fileSizeElement = document.getElementById("file-size");

  if (userCountElement && certificateCountElement && fileSizeElement) {
    let userCount = parseInt(userCountElement.textContent.replace('+', ''));
    let certificateCount = parseInt(certificateCountElement.textContent.replace('+', ''));
    let fileSize = parseFloat(fileSizeElement.innerHTML.replace(' MB+', ''));

    // Tambah pengguna baru
    userCount += 1;
    certificateCount += 1;
    fileSize += 0.5;

    userCountElement.textContent = userCount + '+';
    certificateCountElement.textContent = certificateCount + '+';
    fileSizeElement.innerHTML = fileSize.toFixed(2) + ' MB+';
  }
}
