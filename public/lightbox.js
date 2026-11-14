// Opens the screenshots of the page in a lightbox instead of a new tab.
// Without JavaScript the links still open the image itself.
(function () {
  var box = document.getElementById('lightbox');
  if (!box || typeof box.showModal !== 'function') return;

  var picture = box.querySelector('img');
  var links = document.querySelectorAll('a.hero-shot, a.shot');

  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener('click', function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      var thumb = link.querySelector('img');
      picture.src = link.href;
      picture.alt = thumb ? thumb.alt : '';
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
