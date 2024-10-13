document.addEventListener("DOMContentLoaded", function() {
    const stories = document.querySelectorAll('.story');
    
    window.addEventListener('scroll', checkStories);
  
    function checkStories() {
      const triggerBottom = window.innerHeight / 5 * 4;
  
      stories.forEach(story => {
        const boxTop = story.getBoundingClientRect().top;
  
        if(boxTop < triggerBottom) {
          story.classList.add('show');
        } else {
          story.classList.remove('show');
        }
      });
    }
  
    checkStories();
  });
  let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {

    navbar.style.top = '-80px';
  } else {
    navbar.style.top = '0';
  }
  
  lastScrollTop = scrollTop;
});
  
document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll('.social-icon');
  
    socialIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        alert(`You are being redirected to our ${this.classList[1].split('-')[1]} page.`);
      });
    });
  });