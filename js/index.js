

window.addEventListener('load',() =>{
    let filtertab = document.querySelectorAll('.tab')
    const removefilter = () => filtertab.forEach(tab => {
        tab.classList.remove('active')
    })
    filtertab.forEach(tab =>{
        tab.addEventListener('click',(event) =>{
            removefilter();
            tab.classList.add('active')
            let filtertabname = event.target.getAttribute('data-name')
            document.querySelectorAll('.portfolio-project').forEach(project => {
                let filterprojectname = project.getAttribute('data-name');
                if((filterprojectname == filtertabname) || filtertabname == 'all'){
                    project.style.display = 'block'
                }else{
                    project.style.display = 'none'
                }
            })
        })
    })
})


let faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click',() =>{
        faq.querySelector('.faq-ans').classList.toggle('faq-ans-active')
        faq.querySelector('i').classList.toggle('faq-icon-active')
    })
})

let swiper = new Swiper(" .mySwiper",{
    slidesPerView: 3,
    spaceBetween: 20,
    pagination:{
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
    spaceBetween: 0,
        },
        600:{
            slidesPerView: 2,
    spaceBetween: 10,
        },
        991:{
            slidesPerView: 3,
    spaceBetween: 20,
        }
    }
})


if(window.innerWidth < 971){
    window.addEventListener('scroll',()=>{
        document.querySelector('.menu-links').style.display='flex'
    })
    let menuitems = document.querySelectorAll('.menu-links a')
    const removeActive = ()=>menuitems.forEach(item => {
        
        item.classList.remove('active')
    })
    menuitems.forEach(item => {
        item.addEventListener('click',()=>{
            removeActive()
            item.classList.add('active')
        })
    })
}



let themeCustomize = document.querySelector('.theme-customize')
let themecloser = document.querySelector('.fa-close')
let themeopener = document.querySelector('#theme-icon')
themeopener.addEventListener('click',()=>[
    themeCustomize.style.display = 'flex'
])
themecloser.addEventListener('click',()=>{
    themeCustomize.style.display = 'none'
})
window.addEventListener('scroll',()=>{
    themeCustomize.style.display = 'none'
})


let allcolorpallet = document.querySelectorAll('.choose-color span')
var root = document.querySelector(':root')

allcolorpallet.forEach(color => {
    color.addEventListener('click',()=>{
        if(color.classList.contains('color1')){
            Hue = 252;
        }else if(color.classList.contains('color2')){
            Hue = 52;
        }
        else if(color.classList.contains('color3')){
            Hue = 352;
        }
        else if(color.classList.contains('color4')){
            Hue = 152;
        }
        else if(color.classList.contains('color5')){
            Hue = 202;
        }
        root.style.setProperty('--hue-color',Hue);
    })
})

let allbgpallet = document.querySelectorAll('.choose-bg span')
allbgpallet.forEach(bg=>{
    bg.addEventListener('click',()=>{
        if(bg.classList.contains('bg1')){
            document.querySelector('body').classList.remove('dark-mood')
        }else if(bg.classList.contains('bg2')){
            document.querySelector('body').classList.add('dark-mood')
        }
    })
})




// JavaScript code for handling the resume buttons
document.addEventListener("DOMContentLoaded", function () {
    // Get the resume buttons by their IDs
    const resumeButton1 = document.getElementById("resume-button-1");
    const resumeButton2 = document.getElementById("resume-button-2");
  
    // Function to open the resume in a new tab
    function openResumeInNewTab() {
      // Replace 'your_resume.pdf' with the actual URL or path to your resume PDF file
      const resumeUrl = "Ravi-Sharma-Resume.pdf";
      window.open(resumeUrl, "_blank");
    }
  
    // Function to download the resume as a PDF
    function downloadResumeAsPDF() {
      // Replace 'your_resume.pdf' with the actual URL or path to your resume PDF file
      const resumeUrl = "Ravi-Sharma-Resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Ravi-Sharma-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  
    // Add click event listeners to the resume buttons
    resumeButton1.addEventListener("click", openResumeInNewTab);
    resumeButton2.addEventListener("click", downloadResumeAsPDF);
  });
  