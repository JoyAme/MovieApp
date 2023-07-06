// const cardimg= document.querySelector('.card-img')
// const show= document.querySelector('.show')
// const Times= document.querySelector('.Times')

// cardimg.addEventListener('click', ()=>{
//    show.style.display='block';
// })

// Times.addEventListener('click', ()=>{
//     show.style.display='none';
//  })


// let scrollcontainer=document.querySelector('.container')

// scrollcontainer.addEventListener("wheel" ,(evt)=>{
//       evt.preventDefault();
//       scrollcontainer.scrollLeft += evt.deltaY
// })



const contain=document.querySelector('.contain')
const slid=document.querySelector('.slid')
const move=document.querySelectorAll('.move')

let imageid=1;
     intervali=0;


const slider=()=>{
      intervali=setInterval(() => slideimage(++imageid),1000);
 
}
console.log(intervali)
slider()
const slideimage=()=>{
      imageid= imageid == move.length ? 0: imageid < 0? move.length -1:imageid;
      slid.style.transform =`translate(-${imageid * 100}%)`
}

const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");
let imageIndex = 1,
  intervalId;
// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoSlide function on page load
autoSlide();
// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};


// const imagyy=document.querySelector('.card-imgg')
// const slidd=document.querySelector('.imgyy')
// const cards=document.querySelectorAll('.card-imgg')

// let imageidi=1;
//      intervali=0;


// const slider=()=>{
//       intervali= setInterval(() => slideimage(++imageidi),1000);

// }

// slider()
// const slideimage=()=>{
//       imageidi = imageidi == slidd.length ? 0: imageidi < 0? slidd.length -1:imageidi;
//       cards.style.transform =`translate(-${imageidi * 100}%)`
// }
