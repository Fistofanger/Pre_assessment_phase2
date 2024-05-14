const mapDiv = document.getElementById('map');

async function initMap() {
  const res = await fetch('/location');
  const data = await res.json();

  const mapping = data.teas.map(
    (el) =>
      new ymaps.Placemark(
        el.teaLocation.split(', ').map((el) => parseFloat(el)),
        {
          hintContent: el.teaName,
          balloonContentHeader: el.teaName,
          balloonContentBody: `<p>Сорт чая: ${el.teaType}</p><p>Описание: ${el.teaDescription}</p>`,
          balloonContentFooter: `<a class = 'LinkInInfo' href =http://localhost:3000/teas/${el.id}>Подробнее о чае</a>`,
        },
        {
          iconLayout: 'default#image',
          iconImageHref:
            'https://cdn-icons-png.flaticon.com/128/4300/4300605.png',
          iconImageSize: [35, 40],
        }
      )
  );

  console.log(mapping);
  const map = new ymaps.Map('map', {
    center: [59.913767, 30.350777],
    zoom: 2,
    controls: [
      'zoomControl',
      'searchControl',
      'typeSelector',
      'fullscreenControl',
    ],
  });

  const placemark = new ymaps.Placemark(
    [59.913767, 30.350777],
    {
      hintContent: 'Вы здесь',
      balloonContentHeader: 'Привет, булочка',
      balloonContentBody: 'Пойдем пить чай',
      balloonContentFooter: 'БЫСТРО',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/128/535/535137.png',
      iconImageSize: [35, 40],
    }
  );
  console.log(map);
  mapping.forEach((el) => {
    map.geoObjects.add(el);
  });
  map.geoObjects.add(placemark);
}
ymaps.ready(initMap);
