var map = L.map('map').setView([53.195042, 45.018316], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Teatr = L.marker([53.198394, 45.019067]).addTo(map);
Teatr.bindPopup("<b style = 'font-size: 15px'>Драмтеатр (Пензенский драматический театр имени А.В. Луначарского)</b> <img style='width: 300px; display: block;' src='images1/Театр.jpg' <br>Один из старейших театров России,основанный в 1793 году. Современное здание в стиле сталинского ампира с колоннами является архитектурной доминантой центрального городского сквера. На его сцене ставят классические и современные спектакли.").openPopup();


var Planetariy = L.marker([53.186960, 45.001941]).addTo(map);
Planetariy.bindPopup("<b style = 'font-size: 15px'>Планетарий</b> <img style='width: 300px; display: block;' src='images1/Планетарий 1.jpg' <br>Один из лучших провинциальных планетариев страны,открытый в 1928 году. Располагается в историческом здании — бывшей Никольской церкви. Под его куполом с помощью современного проектора демонстрируют увлекательные программы о звёздах и космосе").openPopup();

var KTeatr = L.marker([53.179649, 45.010463]).addTo(map);
KTeatr.bindPopup("<b style = 'font-size: 15px'>Кукольный дом (Пензенский областной театр кукол «Кукольный дом»)</b> <img style='width: 300px; display: block;' src='images1/Кукольный.jpg' <br>Уютный театр,чья история началась с небольшой любительской студии. Сейчас он располагается в специально построенном здании с оригинальной архитектурой, напоминающей сказочный теремок. Здесь ставят спектакли для детей и взрослых.").openPopup();

var Sobor = L.marker([53.193419, 44.9947253]).addTo(map);
Sobor.bindPopup("<b style = 'font-size: 15px'>Успенский собор (Успенский кафедральный собор))</b> <img style='width: 300px; display: block;' src='images1/Собор.jpg' <br>Главный православный храм Пензы,расположенный на Соборной площади. Современное здание было построено и освящено в 1905 году на месте более старой церкви. Его краснокирпичная архитектура в русско-византийском стиле делает собор одной из ключевых достопримечательностей города.").openPopup();


var marker = L.marker([53.183283, 45.01632]).addTo(map);
var marker1 = L.marker([52.992622, 43.674328]).addTo(map);
var marker2 = L.marker([53.192355, 45.025493]).addTo(map);

marker.bindPopup("<b>Памятник Первопоселенец</b> <img style='width: 100px; display: block;' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/02/a2/3f/img-20170722-150233-largejpg.jpg?w=1200&h=1200&s=1' <br>Чё нибудь про него написать").openPopup();

marker1.bindPopup("<b>Тарханы</b> <img style='width: 100px; display: block;' src='https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxytKw8piNKaUoczWBj-I0EYvpq3X-7xMY144jV1ijM_veuKm6Xb8p-RFD8uDvCGRkOJXpcnFAGDaoHDY9Chg82WiK_at1sR33Xcq6B4AZV25VrFABaoJp0uy1qxWOfKHmqBgOZ=s1360-w1360-h1020-rw' <br>Чё нибудь про него написать").openPopup();

marker2.bindPopup("<b>Набережная</b> <img style='width: 100px; display: block;' src='https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=6Eq_Zzx6QNYB2m6_HPu0hw&image_size=XL' <br>Чё нибудь про него написать").openPopup();

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector(".Burger")
    btn.addEventListener("click", function() {
        document.querySelector(".menu").classList.add("active")
    })
})

    let btnX = document.querySelector(".x")
    btnX.addEventListener("click", function() {
        document.querySelector(".menu").classList.remove("active")
    })

    document.querySelectorAll(".m-link").forEach( el => {
        el.addEventListener("click", function() {
            document.querySelector(".menu").classList.remove("active")
        })
    })



    $( function() {
        $( "#accordion" ).accordion();
      } );

      document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.heading').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(e) {
            const index = e.currentTarget.dataset.index;
            document.querySelectorAll(".img").forEach(el => {
                el.classList.remove("active")
                document.querySelector(`[data-target="${index}"]`).classList.add('active');
            }) 
            });
        });
    })
