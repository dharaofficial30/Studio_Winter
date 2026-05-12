window.addEventListener("scroll", function(){

    let nav = document.querySelector(".custom-nav");

    nav.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});// script.js

/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active-slide");
  });

  dots.forEach((dot)=>{
    dot.classList.remove("active-dot");
  });

  slides[index].classList.add("active-slide");
  dots[index].classList.add("active-dot");

}

/* DOT CLICK */

dots.forEach((dot,index)=>{

  dot.addEventListener("click", ()=>{

    currentSlide = index;

    showSlide(currentSlide);

  });

});

/* AUTO SLIDER */

setInterval(()=>{

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 5000);
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.custom-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal'); // ये लाइन कार्ड को दिखाएगी
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
function reveal() {
  var reveals = document.querySelectorAll(".custom-card");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150; // Kitna scroll karne par animation start ho

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal");
    }
  }
}

// Scroll karte waqt function ko call karein
window.addEventListener("scroll", reveal);

// Page load hote hi ek baar check karein (agar section pehle se upar ho)
reveal();
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.advice-card');
    
    // बटन क्लिक इवेंट
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', () => {
        contactBtn.innerHTML = "LOADING...";
        setTimeout(() => {
            alert("Contact form is opening!");
            contactBtn.innerHTML = "CONTACT FORM";
        }, 1000);
    });

    // स्क्रॉल होने पर दिखाई देने वाला एनिमेशन (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.1 });

    observer.observe(card);
});
document.addEventListener('DOMContentLoaded', () => {
    // कार्ड्स पर हल्का सा जूम इफेक्ट या क्लिक इवेंट
    const cards = document.querySelectorAll('.course-card');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logo-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "0.7";
                    entry.target.style.transform = "translateY(0)";
                }, index * 150); // एक-एक करके आएंगे
            }
        });
    });

    logos.forEach(logo => {
        logo.style.transform = "translateY(20px)";
        logo.style.opacity = "0";
        logo.style.transition = "all 0.5s ease-out";
        observer.observe(logo);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    
    // डॉट्स क्लिक करने पर एक्टिव स्टेटस बदलना
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            document.querySelector('.dot.active').classList.remove('active');
            dot.classList.add('active');
            console.log(`Slide ${index + 1} selected`);
            // यहाँ आप स्लाइडर को मूव करने का लॉजिक जोड़ सकते हैं
        });
    });

    document.querySelectorAll('.play-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      
        const videoLinks = [
            "https://youtu.be/9gMQge8Ecz0?si=3lL_nGo6SBrm-1_i",
            "https://youtu.be/FJspeMI5ICc?si=uNv1km2Lwml9aF3f",
            "https://youtu.be/FJspeMI5ICc?si=uNv1km2Lwml9aF3f",
            "https://youtu.be/FJspeMI5ICc?si=uNv1km2Lwml9aF3f"
        ];
        
        window.open(videoLinks[index], '_blank');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const homeToggle = document.getElementById("homeDropdown");
    const homeMenu = homeToggle.nextElementSibling; // submenu-list

    if (homeToggle) {
        homeToggle.addEventListener("click", function(e) {
            // Mobile toggle logic
            if (window.innerWidth < 992) {
                e.preventDefault(); // Page reload rokne ke liye
                homeMenu.classList.toggle("show");
            }
        });
    }

    // Bahar click karne par menu close ho jaye
    window.addEventListener("click", function(e) {
        if (!homeToggle.contains(e.target)) {
            homeMenu.classList.remove("show");
        }
    });
});
