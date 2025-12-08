var map = L.map('map').setView([53.195042, 45.018316], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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
