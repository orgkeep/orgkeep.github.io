// Opens the images of the documentation in a lightbox on click, like the screenshots of the home page (lightbox.js).
// The Markdown stays plain: every image of a page's content gets the behaviour. Without JavaScript nothing changes.
(function () {
  var images = document.querySelectorAll('.sl-markdown-content img');
  if (images.length === 0) return;

  var box = document.createElement('dialog');
  if (typeof box.showModal !== 'function') return;
  box.className = 'lightbox';
  box.setAttribute('aria-label', 'Image');
  box.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(box);
  var picture = box.querySelector('img');

  Array.prototype.forEach.call(images, function (image) {
    image.classList.add('zoomable');
    image.addEventListener('click', function () {
      // currentSrc: the file the browser chose among the sizes Astro generated
      picture.src = image.currentSrc || image.src;
      picture.alt = image.alt;
      box.showModal();
    });
  });

  // a click on the backdrop closes the box; a click on the picture does not
  box.addEventListener('click', function (event) {
    if (event.target === box) box.close();
  });

  box.querySelector('.lightbox-close').addEventListener('click', function () {
    box.close();
  });

  // free the memory of the large picture once the box is closed
  box.addEventListener('close', function () {
    picture.removeAttribute('src');
  });
})();
