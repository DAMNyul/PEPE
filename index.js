setInterval(() => {

    let imgs = document.querySelectorAll('img');
    imgs.forEach((a) => {
      a.src = 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg.webp';
    });

    
    let elements = document.querySelectorAll('*'); 
    elements.forEach((el) => {
      if (window.getComputedStyle(el).backgroundImage !== 'none') { 
        el.style.backgroundImage = 'url(https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg.webp)';
      }
    });
  }, 500);
  