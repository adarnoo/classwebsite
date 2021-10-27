(function() {
  let rightContainer = document.querySelector('.sm-right-container');

  // Do the same thing for every sm-link element
  document.querySelectorAll('.sm-link').forEach(link => {
    // Add site video showing when u hover link
    link.addEventListener("mouseenter", e => {
      let siteName = e.target.getAttribute('data-name');
      rightContainer.classList.add('sm-image-showing--' + siteName);
      console.log('hovering on: ', siteName);
    })

    // Remove site video showing when u move off link
    link.addEventListener("mouseleave", e => {
      let siteName = e.target.getAttribute('data-name');
      rightContainer.classList.remove('sm-image-showing--' + siteName);
      console.log('moving off: ', siteName)
    })
  })
})();
