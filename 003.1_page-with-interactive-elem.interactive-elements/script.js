const element = document.querySelector('.select');
const choice = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("MyMap1", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.872185, 2.354224],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13
        });

        // var myGeoObject = new ymaps.GeoObject({
        //   geometry: {
        //     type: "Point", // тип геометрии - точка
        //     coordinates: [48.872185, 2.354224] // координаты точки
        //   }
        // });

        var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/maps_cursor.svg',
          iconImageSize: [48, 48],
          iconImageOffset: [-3, -42]
        });

        myMap.geoObjects.add(myPlacemark);
        // myMap.geoObjects.add(myGeoObject);
    }


var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);
new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Минимум 2-ва символа',
      maxLength: 'Максимум 10-ть символов'
    },
    tel: 'Введен не полный номер',
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'Некорректно введен e-mail'
    },
  },
  tooltip: {
    fadeOutTime: 5000, // default value - 5000
    fadeOutClass: '.hide'
  },

});

