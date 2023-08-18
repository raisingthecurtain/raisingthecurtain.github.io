// Text-Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Curtain Effect
// $(document).scroll(function(){
//    if ($(document).scrollTop() > 320 ) {
//      $('.main').addClass('active');
//      $('.reveal-main').addClass('activetwo');
//    }
  
//   else {
//     $('.main').removeClass('active');
//          $('.reveal-main').removeClass('activetwo');
//   }

// });
