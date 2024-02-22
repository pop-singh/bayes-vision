

document.addEventListener('DOMContentLoaded', function() {
    var scrollPos = 0;
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        scrollPos = window.scrollY;

        if (scrollPos > 50) {
            navbar.style.backgroundColor = '#000';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});



function navigateToOurProduct() {
   
    document.getElementById('our_product').scrollIntoView({
        behavior: 'smooth'
    });
}

function toggleMoreContent1() {
    var moreContent = document.getElementById('moreContent-1');
    var containerPara = document.getElementById('containerPara-1');
    var buttonText = document.getElementById('buttonText-1');

    if (moreContent.classList.contains('hide-1')) {
        moreContent.classList.remove('hide-1');
        containerPara.style.height = 'auto';
        buttonText.textContent = 'Close';
    } else {
        moreContent.classList.add('hide-1');
        containerPara.style.height = '';
        buttonText.textContent =  'See More';
    }
}
function toggleMoreContent2() {
    var moreContent = document.getElementById('moreContent-2');
    var containerPara = document.getElementById('containerPara-2');
    var buttonText = document.getElementById('buttonText-2');

    if (moreContent.classList.contains('hide-2')) {
        moreContent.classList.remove('hide-2');
        containerPara.style.height = 'auto';
        buttonText.textContent = 'Close';
    } else {
        moreContent.classList.add('hide-2');
        containerPara.style.height = '';
        buttonText.textContent =  'See More';
    }
}
function toggleMoreContent3() {
    var moreContent = document.getElementById('moreContent-3');
    var containerPara = document.getElementById('containerPara-3');
    var buttonText = document.getElementById('buttonText-3');

    if (moreContent.classList.contains('hide-3')) {
        moreContent.classList.remove('hide-3');
        containerPara.style.height = 'auto';
        buttonText.textContent = 'Close';
    } else {
        moreContent.classList.add('hide-3');
        containerPara.style.height = '';
        buttonText.textContent =  'See More';
    }
}

// for responsive


function toggleNavbar() {
    var navbarList = document.querySelector('.navbar_list ul');
    var barsIcon = document.querySelector('.bars_icon');

    navbarList.classList.toggle('show');
    
    // Toggle the 'shifted' class only when bars icon is clicked
    if (navbarList.classList.contains('show')) {
      barsIcon.classList.add('shifted');
    } else {
      barsIcon.classList.remove('shifted');
    }
  }

  // Close the navbar when clicking outside of it
  document.addEventListener('click', function(event) {
    var navbarList = document.querySelector('.navbar_list ul');
    var barsIcon = document.querySelector('.bars_icon');

    if (!event.target.closest('.bars_icon') && !event.target.closest('.navbar_list')) {
      navbarList.classList.remove('show');
      barsIcon.classList.remove('shifted');
    }
  });