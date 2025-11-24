// set year
  document.getElementById('year').textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const navList = document.getElementById('navList');
  const navLinks = document.querySelectorAll('#navList a');

  // Toggle menu open/close
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('show');
    });
  });



  
  // hero slider auto
  (function heroSlider(){
    const slider = document.getElementById('slider');
    const slides = slider.children;
    let idx = 0;
    setInterval(()=> {
      idx = (idx + 1) % slides.length;
      slider.style.transform = 'translateX(' + (-idx * 100) + '%)';
    }, 4500);
  })();


  

  // Fading Quotes Rotation
const quotes = document.querySelectorAll('#quotesWrap .quote');
let quoteIndex = 0;

function rotateQuotes() {
  quotes[quoteIndex].classList.remove('active');
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quotes[quoteIndex].classList.add('active');
}

if (quotes.length > 0) {
  quotes[0].classList.add('active');
  setInterval(rotateQuotes, 6000); // every 6 seconds
}

  
  // job see more expand/collapse
  function toggleMore(btn){
    const more = btn.nextElementSibling;
    if(!more) return;
    if(more.style.display === 'block'){ more.style.display=''; btn.textContent='See more'; }
    else{ more.style.display='block'; btn.textContent='See less'; }
  }

  
  // gallery modal
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  function openModal(img){
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
    modalImg.src = img.src;
    modalImg.alt = img.alt || '';
    modalCaption.textContent = img.dataset.caption || img.alt || '';
    document.body.style.overflow = 'hidden';
  }
  
  
  function closeModal(){
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });

  
  function openGallery(){
    // scroll to gallery and focus first image
    document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
  }




  // ============GALLERY SECTION================================
// JavaScript to handle the "See More" button functionality
document.getElementById('see-more-btn').addEventListener('click', function () {
    // Get all hidden gallery items
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');

    // Toggle their visibility
    hiddenItems.forEach(function (item) {
        item.classList.toggle('hidden');
    });

    // Change the button text
    if (this.innerText === 'See More') {
        this.innerText = 'See Less';
    } else {
        this.innerText = 'See More';
    }
});



 
  // contact form: simple fake submit
  function submitForm(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    alert('Thanks ' + name + '. Your enquiry about "' + service + '" has been received. We will contact you at ' + email + '.');
    e.target.reset?.();
  }

  
  // back to top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300) toTop.style.display = 'block';
    else toTop.style.display = 'none';
  });
  toTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));


  // smooth links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href === '#') return;
      const el = document.querySelector(href);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); if(navList.style.display === 'flex') navList.style.display=''; }
    })
  });