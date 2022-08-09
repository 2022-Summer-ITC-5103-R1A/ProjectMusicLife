 const carouselSlide =  document.querySelector('.carousel-slide');
 const carouselImages = document.querySelectorAll('.carousel-slide img');

 const previousButton = document.querySelector('#prevImage')
 const nextButton = document.querySelector('#nextImage')


let counter = 1
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';


// Next button
nextButton.addEventListener('click', () =>{
    if(carouselImages[counter].id === 'firstImg'){
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - 4
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

    }else if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = 'translate 0.4 ease-in-out'
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    
})


// previous button
previousButton.addEventListener('click', () =>{
    if(carouselImages[counter].id === 'lastImg'){
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - 4

    }else if(counter <=0) return
    carouselSlide.style.transition = 'translate 0.4 ease-in-out'
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})


// Check if screen size changes
window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



