/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// var tabContent = document.querySelectorAll(".tabcontent"),
//     links = document.querySelectorAll(".tabheader__item");
// links.forEach(function(element, index) {
//     element.addEventListener("click", function () {
//         links.forEach(e => {
//             if  (e.classList.contains("tabheader__item_active")) {
//                 e.classList.remove("tabheader__item_active");
//             }
//          });
//         tabContent.forEach(e => {
//            if  (e.classList.contains("tabcontent__active")) {
//                e.classList.remove("tabcontent__active");
//            }
//         });
//         tabContent[index].classList.add("tabcontent__active");
//         element.classList.add("tabheader__item_active");
//     });
// });
window.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabConten(i) {
    tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('fade'); // Плавность

    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabConten(0); // Задали дефолтные значения

  tabsParent.addEventListener('click', function () {
    var target = event.target; // Для экономии, т.е. event.target будет использован несколько раз

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, index) => {
        if (target == item) {
          //Элемент который сейчас перебирается = кликнутому элементу
          hideTabContent();
          showTabConten(index);
        }
      });
    }
  });
}); // ТАЙМЕР
// var days = document.querySelector('#days'),
//     hours = document.querySelector('#hours'),
//     minutes = document.querySelector('#minutes'),
//     seconds = document.querySelector('#seconds');
// var finalDate = new Date('2021-08-14'),
//     currentDate,
//     remaining;
// function remainingTime() {
//     currentDate = new Date()
//     remaining = new Date(finalDate - currentDate);
//     if (remaining.getMonth()>0) { // Если до ивента более одного месяца
//         days.textContent = remaining.getDate() + remaining.getMonth() * 30;
//     } else {
//         days.textContent = remaining.getDate();
//     }
//     hours.textContent = remaining.getHours();
//     minutes.textContent = remaining.getMinutes();
//     seconds.textContent = remaining.getSeconds();
// }
// remainingTime();
// var timeId = setInterval(remainingTime, 1000);

var deadLine = new Date('2021-09-10');

function getTimeRemaning(endTime) {
  var t = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      //Получаем количество дней поделив общее кол-во миллисекунд на кол-во миллисекунд в одном дне
  hours = Math.floor(t / (1000 * 60 * 60) % 24),
      minutes = Math.floor(t / (1000 * 60) % 60),
      seconds = Math.floor(t / 1000 % 60);
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function getZero(num) {
  //Функция помошник, если величина времени <10 подставлять ноль
  if (num >= 0 && num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}

function setClock(selector, endtiem) {
  var timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
  updateClock(); // Запустим функцию чтобы таймер сразу установил нужные значения

  function updateClock() {
    var t = getTimeRemaning(endtiem);
    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (t.total <= 0) {
      // Если интервал дошел до 0 остановить его
      clearInterval(timeInterval);
    }
  }
}

setClock('.timer', '2021-09-10'); // МОДАЛЬНОЕ ОКНО
// var modal = document.querySelector('.modal'),
//     openModal = document.querySelectorAll('[data-modal]'),
//     closeModal = document.querySelector('[data-close]');
// openModal.forEach(element => {
//     element.addEventListener('click' , () => {
//         modal.style.display = 'block';
//     });
// });
// closeModal.addEventListener('click' , () => {
//     modal.style.display = 'none';
// });
// // Закрытие модального окна по клику вне его
// modal.addEventListener('click' , function (item) {
//     if (item.target.classList.contains('modal')) {
//         modal.style.display = 'none';
//     }
// });

var modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');
    //modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide'); // Уберем прокрутку заднего фона

  document.body.style.overflow = 'hidden'; //Если мод.окно уже было открыто, остановить отсчет вызова

  clearInterval(modalTimerId);
}

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show'); // Уберем прокрутку

  document.body.style.overflow = ''; // Если значение пусто, браузер сам подставит дефолтное  
}

modalTrigger.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});
//modalCloseBtn.addEventListener('click', closeModal); //Закрытие по клику вне окна формы

modal.addEventListener('click', function (event) {
  if (event.target === modal || event.target.getAttribute('data-close') == '') {
    closeModal();
  }
}); 

//Закрытие модального окна по ESC
document.addEventListener('keydown', e => {
  // e.code позваляет узнать какая-клавиша была нажата
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    //Закрываем если нажат Esc и модальное окно было открыто
    closeModal();
  }
}); //Показ модального окна спустя некоторый промежуток времени
var modalTimerId = setTimeout(openModal, 50000);

function showModalByScroll() {
  //pageYOffset возвращает количество пикселей, на которое прокручен документ по вертикали
  //clientHeight внутренняя высота элемента в пикселах (ширина видимо на экране контента)
  //scrollHeight высота элемента, включая содержимое, невидимое из-за прокрутки
  //Прокрученный контент сверху + текущий размер документа (контент вне прокрутки не входит) >= полный размер элемен (весь контент, включая скртытый в прокрутке)
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal(); //Показываем только при первой прокрутке, затем событие удаляем

    window.removeEventListener('scroll', showModalByScroll);
  }
} //Открытие модального окна при прокруике страницы до конца


window.addEventListener('scroll', showModalByScroll); //Используем Классы для карточек меню
// var menuWrapper = document.querySelector('.menu__field .container') ;
// function MenuItem(img, title, descr, price) {
//     this.img = img;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.addItem = function() {
//         menuWrapper.insertAdjacentHTML('beforeend', '       <div class="menu__item"> <img src="' + this.img + '" alt="vegy"> <h3 class="menu__item-subtitle">' + this.title + '</h3> <div class="menu__item-descr">' + this.descr +'</div>  <div class="menu__item-divider"></div>  <div class="menu__item-price"> <div class="menu__item-cost">Цена:</div><div class="menu__item-total"><span>' + this.price + '</span> грн/день</div> </div></div>');
//     };
// }
// var newItem = new MenuItem('img/tabs/elite.jpg', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '550');
// newItem.addItem();
// console.log(menuWrapper);
// Создадим класс для создания наших карточек меню

class menuCard {
  constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.classes = classes || 'test';
  }

  render() {
    var element = document.createElement('div'); //Добавим к нашему элементу div все классы которые могут пердаваться в конструктор

    if (this.classes.length === 0) {
      this.element = 'menu__item';
      element.classList.add(this.element);
    } else {
      this.classes.forEach(className => element.classList.add(className));
    }

    element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
        `;
    this.parent.append(element);
  }

} // для создания нового элемента создадим его через констурктор и вызовем
//var div = new menuCard('...');
//div.render();
//Запись можно сократить
//new menuCard('...').render(); //Объект создался, вызвал функцию и сразу удалился, мы его никуда не сохранили, но он нам больше и не нужен


new menuCard(
  "img/tabs/vegy.jpg",
  "vegy", 
  'Меню "Фитнес"', 
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', "229", ".menu .container"
).render();


//Создадим отправку данных с нашей форы 
var forms = document.querySelectorAll('form');

//Создадим сообщения о процессе отправки
var message = {
  loading: 'icons/spinner.svg',
  success: 'Спасибо! Скоро мы с вами свяжемся',
  failure: 'Что-то пошло не так...'
};

//Переберем все наши формы и вызовем для них функцию отправки
forms.forEach(item => {
  postData(item);
});

//Функция отправки данных с формы
function postData(form) {
  form.addEventListener('submit', (e) => { //Событие submit срабатывает каждый раз при отправке формы
    e.preventDefault(); //Отлючаем стандартное поведение, в данном случае перезагрузку страницы при отправке формы 

    //Создадим элемент для показа статусного сообщения пользователю
    //теперь для отображения будем создавать img
    var statusMessage = document.createElement('img');
    statusMessage.src = message.loading;
    //Добавим немного стилей для отображения нашей картинки
    statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
    `;
    //Изменим место вставки нашего кружка закгрузки во всех окнах
    form.insertAdjacentElement('afterend', statusMessage);



    // Для сбора всех данных с формы изпользуем метод FormData (для этого в форме обязательно должны быть указана атрибуты name у инпутов)
    var formData = new FormData(form);

    // //Создадим объект для перебора всех элементов formData
    // var object = {};
    // formData.forEach(function(value, key){
    //   object[key] = value;
    // });

    // //Преобразуем получившийся объект в JSON
    // var json = JSON.stringify(object);
    
    
    fetch('server.php', {
      method: "POST",
      // headers: {
      //   'Content-type': 'application/json'
      // },
      body: formData
      //Чтобы понимать какой ответ приходит от сервера, нам надо его модифицировать
    }).then(data => data.text())
    .then(data => {
        console.log(data);
        //Вызываем наше динамическое модальное окно которое закроется через 4 сек
        showThanksModal(message.success);
        form.reset();//Очищаем форму
        statusMessage.remove();
    }).catch(() => {
        showThanksModal(message.failure);
    }).finally(() => {
      form.reset();//Очищаем форму
    });

  });
}


function showThanksModal(message) {
  var prevModalDialog = document.querySelector('.modal__dialog');
  
  //Скроем наше моадльное окно
  prevModalDialog.classList.add('hide');
  //Функция вызова модального окна, но поскольку мы его скрыли появится только затемнение и исчезнет прокрутка
  openModal();

  //Создаем свое модальное окно
  var thanksModal = document.createElement('div');
  thanksModal.classList.add('modal__dialog');
  thanksModal.innerHTML = `
    <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
    </div>
  `;

  //Добавим в верстку наш созданный элемент
  document.querySelector('.modal').append(thanksModal);

  //Если пользователь захочет снова увидеть модальное окно, мы должны его вернуть спустя некоторое время 
  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hide');
    closeModal();
  }, 4000);
}





/***/ })

/******/ });
//# sourceMappingURL=script.js.map