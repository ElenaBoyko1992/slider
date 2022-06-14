
//Настройки Gulp - проверка поддержки webp, добавление класса webp или no-webp для HTML
function isWebp() {
	//Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	//Добавление класса webp или no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
isWebp();
/*основной код==============================================================*/


let arrowLeft = document.querySelector('.slider-page__arrow_left');
let arrowRight = document.querySelector('.slider-page__arrow_right');
let slides = document.querySelectorAll('.slider-page__slide');
let dots = document.querySelector('.slider-page__dots');

//создаем точку слайда
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div');
	dots.append(dot);
	dot.classList.add('slider-page__dot');
};

let allDots = document.querySelectorAll('.slider-page__dot');
allDots[0].classList.add('active');

//переключение слайдов нажатием на точки
for (let i = 0; i < allDots.length; i++) {

	allDots[i].addEventListener('click', function () {
		for (let i = 0; i < allDots.length; i++) {
			if (allDots[i].classList.contains('active')) {
				allDots[i].classList.remove('active');
				slides[i].classList.remove('active');
			};
		};

		allDots[i].classList.add('active');
		slides[i].classList.add('active');
	});
};

//переключение слайдов нажатием на стрелку "вправо"
arrowRight.addEventListener('click', function () {
	for (let i = 0; i < slides.length; i++) {

		if (slides[i].classList.contains('active')) {
			//если последний слайд
			if (i == slides.length - 1) {

				//если не нужна непрерывная прокрутка:
				//break;


				//если нужна непрерывная прокрутка:

				//убираем active у последнего слайда
				slides[i].classList.remove('active');
				//убираем active у последней точки
				allDots[i].classList.remove('active');
				i = 0;
				//добавляем active первому слайду
				slides[i].classList.add('active');
				//добавляем active первой точке
				allDots[i].classList.add('active');
				break;

			} else {
				//убираем active у предыдущего слайда и точки
				slides[i].classList.remove('active');
				allDots[i].classList.remove('active');

				//добавляем active текущему слайду и точке
				slides[++i].classList.add('active');
				allDots[i].classList.add('active');
			}
		}

	}
});

//переключение слайдов нажатием на стрелку "влево"
arrowLeft.addEventListener('click', function () {
	for (let i = (slides.length - 1); i >= 0; i--) {
		if (slides[i].classList.contains('active')) {

			if (i == 0) {

				//если не нужна непрерывная прокрутка:
				//break;

				//если нужна непрерывная прокрутка:

				//убираем active у первого слайда
				slides[i].classList.remove('active');
				//убираем active у первой точки
				allDots[i].classList.remove('active');

				i = slides.length - 1;

				//добавляем active последнему слайду
				slides[i].classList.add('active');
				//добавляем active последней точке
				allDots[i].classList.add('active');
				break;
			} else {
				//убираем active у предыдущего слайда и точки
				slides[i].classList.remove('active');
				allDots[i].classList.remove('active');

				//добавляем active текущему слайду и точке
				slides[--i].classList.add('active');
				allDots[i].classList.add('active');
			}
		}
	}
});


