// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 80; // Adjust this value to offset the scrolling position
  
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle navigation menu
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.querySelector('.navlist');
  
  menuIcon.addEventListener('click', function() {
    navList.classList.toggle('active');
  });
  
  // Scroll event handling for animations
  window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    const windowHeight = window.innerHeight;
  
    if (window.pageYOffset > homeSection.offsetTop - windowHeight / 2) {
      homeSection.classList.add('active');
    }
  });
  
  // Custom animations
  const portfolioItems = document.querySelectorAll('.portfolio-content .row');
  
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.querySelector('.layer').style.opacity = '1';
    });
  
    item.addEventListener('mouseleave', function() {
      this.querySelector('.layer').style.opacity = '0';
    });
  });