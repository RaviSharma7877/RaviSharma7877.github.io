window.addEventListener('scroll', function() {
    var navMenu = document.getElementById('nav-menu');
    var sticky = navMenu.offsetTop;
  
    if (window.pageYOffset >= sticky) {
      navMenu.classList.add('sticky');
    } else {
      navMenu.classList.remove('sticky');
    }
  });
  // Get all the navbar links
var navLinks = document.querySelectorAll('#nav-menu ul li a');

// Loop through each link and attach a click event listener
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    // Remove the "active" class from all links
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }

    // Add the "active" class to the clicked link
    this.classList.add('active');
  });
}

import React from 'react';
import ReactDOM from 'react-dom';
import GitHubCalendar from 'react-github-calendar';

// Define your other components and elements here

const App = () => {
  return (
    <div>
      {/* Other components */}
      <GitHubCalendar className="react-activity-calendar" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
