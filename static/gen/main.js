document.addEventListener('DOMContentLoaded',()=>{function toggleDarkMode(){const root=document.documentElement;const isDarkMode=root.classList.toggle('dark');localStorage.setItem('theme',isDarkMode?'dark':'light');updateDarkModeIcon(isDarkMode);}
function updateDarkModeIcon(isDarkMode){const darkModeIcons=document.querySelectorAll('.dark-mode-icon');darkModeIcons.forEach((icon)=>{icon.innerHTML=isDarkMode?`<svg xmlns="http://www.w3.org/2000/svg"class="h-6 w-6"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M12 3v1m0 16v1m8-9h1M4 12H3m15.364-7.364l-.707.707M6.343 6.343l-.707.707M17.657 17.657l-.707-.707M6.343 17.657l-.707-.707"/></svg>`:`<svg xmlns="http://www.w3.org/2000/svg"class="h-6 w-6"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M12 4.354a8.001 8.001 0 000 15.292A7 7 0 1112 4.354z"/></svg>`;});}
const root=document.documentElement;const savedTheme=localStorage.getItem('theme');const isDarkMode=savedTheme==='dark'||(!savedTheme&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(isDarkMode){root.classList.add('dark');}else{root.classList.remove('dark');}
updateDarkModeIcon(isDarkMode);const toggleButtons=document.querySelectorAll('.dark-mode-toggle');toggleButtons.forEach((button)=>{button.addEventListener('click',toggleDarkMode);});function loadNow(opacity){if(loader){if(opacity<=0){displayContent();}else{loader.style.opacity=opacity;window.setTimeout(()=>loadNow(opacity-0.18),50);}}}
function displayContent(){if(loader){loader.style.display='none';}
const mainContent=document.getElementById('main-content');if(mainContent){mainContent.style.display='block';}}
loader=document.getElementById('loader');if(loader)loadNow(1);const allImgs=document.querySelectorAll('img.lazy-img');function handleImageLazyLoad(entries,observer){entries.forEach((entry)=>{if(!entry.isIntersecting)return;const img=entry.target;img.addEventListener('load',function(){img.classList.remove('lazy-img');});observer.unobserve(img);});}
const imageObserver=new IntersectionObserver(handleImageLazyLoad,{root:null,threshold:0.15,rootMargin:'200px',});allImgs.forEach((img)=>{imageObserver.observe(img);});function scrollToSection(e,parentClass){if(e.target.closest('.dark-mode-toggle'))return;const target=e.target.closest(`.${parentClass}`);if(target){const targetId=target.getAttribute('href');if(targetId==='/'||targetId==='/resume'||targetId==='/resume/download')
return;e.preventDefault();const targetElement=document.querySelector(targetId);if(targetElement){targetElement.scrollIntoView({behavior:'smooth'});}else{}}}
const nav=document.querySelector('nav');const dropdownMenu=document.querySelector('#dropdown-menu');if(nav){nav.addEventListener('click',(e)=>scrollToSection(e,'nav-real'));}
if(dropdownMenu)
dropdownMenu.addEventListener('click',(e)=>scrollToSection(e,'dropdown-link'));const tabs=document.querySelectorAll('[role="tab"]');const tabContents=document.querySelectorAll('[role="tabpanel"]');tabs.forEach((tab)=>{tab.addEventListener('click',()=>{tabContents.forEach((content)=>content.classList.add('hidden'));tabs.forEach((item)=>{item.setAttribute('aria-selected','false');item.classList.remove('border-blue-500','border-b-2');item.classList.add('border-transparent');});const target=document.querySelector(tab.getAttribute('data-target'));target.classList.remove('hidden');tab.setAttribute('aria-selected','true');tab.classList.add('border-blue-500','border-b-2');});});const swiper=new Swiper('.centered-slide-carousel',{centeredSlides:true,loop:true,spaceBetween:30,slideToClickedSlide:true,pagination:{el:'.centered-slide-carousel .swiper-pagination',clickable:true,},breakpoints:{1920:{slidesPerView:1,spaceBetween:0,},1200:{slidesPerView:2,spaceBetween:30,},1028:{slidesPerView:2,spaceBetween:10,},990:{slidesPerView:1,spaceBetween:0,},},});swiper.on('slideChangeTransitionEnd',()=>{const activeSlide=swiper.slides[swiper.activeIndex];if(activeSlide){activeSlide.scrollIntoView({behavior:'smooth',block:'center',inline:'center',});}});const swiperDrawer=new Swiper('.vertical-slide-carousel',{loop:true,direction:'vertical',mousewheelControl:true,mousewheel:{releaseOnEdges:true,},spaceBetween:30,grabCursor:true,pagination:{el:'.vertical-slide-carousel .swiper-pagination',clickable:true,},});const gallery=new Viewer(document.getElementById('certificate_imgs'),{navbar:true,toolbar:true,tooltip:true,fullscreen:false,movable:true,zoomable:true,scalable:true,transition:true,});function updateYears(){let ageText=document.querySelector('.age-text');if(ageText){ageText.textContent=new Date().getFullYear()-2002;}
let footerYearElement=document.querySelector('.footer-year-text');if(footerYearElement)
footerYearElement.textContent=new Date().getFullYear();}
updateYears();});