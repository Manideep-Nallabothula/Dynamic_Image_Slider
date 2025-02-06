// array of image sources and text
const slides = [
	{ image: 'image1.jpg', text: 'A lion sleeps in the heart of every brave man.' },
	{ image: 'image2.jpg', text: 'An injured lion still wants to roar.' },
	{ image: 'image3.jpg', text: 'The mighty lion knows no bounds of fear.' },
	
];

// select the slides container
const slidesContainer = document.querySelector('.slides');

// select the prev and next buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// current slide index
let currentSlideIndex = 0;

// function to create and add slides
function createSlides() {
	slides.forEach((slide, index) => {
		const slideElement = document.createElement('div');
		slideElement.classList.add('slide');
		if (index === 0) {
			slideElement.classList.add('active');
		}

		const imageElement = document.createElement('img');
		imageElement.src = slide.image;
		slideElement.appendChild(imageElement);

		const textElement = document.createElement('p');
		textElement.classList.add('text');
		textElement.textContent = slide.text;
		slideElement.appendChild(textElement);

		slidesContainer.appendChild(slideElement);
	});
}

// function to handle prev button click
function handlePrevButtonClick() {
	const currentSlide = slidesContainer.querySelector('.active');
	currentSlide.classList.remove('active');
	const prevSlide = currentSlide.previousElementSibling;
	if (prevSlide) {
		prevSlide.classList.add('active');
		currentSlideIndex--;
	} else {
		const lastSlide = slidesContainer.querySelector('.slide:last-child');
		lastSlide.classList.add('active');
		currentSlideIndex = slides.length - 1;
	}
}

// function to handle next button click
function handleNextButtonClick() {
	const currentSlide = slidesContainer.querySelector('.active');
	currentSlide.classList.remove('active');
	const nextSlide = currentSlide.nextElementSibling;
	if (nextSlide) {
		nextSlide.classList.add('active');
		currentSlideIndex++;
	} else {
		const firstSlide = slidesContainer.querySelector('.slide:first-child');
		firstSlide.classList.add('active');
		currentSlideIndex = 0;
	}
}

// create slides
createSlides();

// add event listeners to prev and next buttons
prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);
