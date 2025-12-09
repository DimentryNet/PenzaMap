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

var Filarmonia = L.marker([53.202661, 44.986880]).addTo(map);
Filarmonia.bindPopup("<b style = 'font-size: 15px'>Филармония (Пензенская областная филармония))</b> <img style='width: 300px; display: block;' src='images1/Филармония.jpg' <br>Главная концертная площадка региона. Здесь выступают симфонический оркестр, хоровая капелла и приглашённые артисты, проводя концерты классической и народной музыки.").openPopup();

var Kuvaka = L.marker([53.165560, 44.136539]).addTo(map);
Kuvaka.bindPopup("<b style = 'font-size: 15px'>Кувака</b> <img style='width: 300px; display: block;' src='images1/Кувака.jpg' <br>Историческое село в Каменском районе,знаменитое своим природным источником. С начала XX века здесь работает завод по розливу минеральной воды «Кувака», основанный графом В.Н. Воейковым. Сегодня это современный туристический комплекс с музеем, дегустационным залом и живописными окрестностями.").openPopup();

var Narovchat = L.marker([53.883431, 43.695780]).addTo(map);
Narovchat.bindPopup("<b style = 'font-size: 15px'>Наровчат</b> <img style='width: 300px; display: block;' src='images1/Наровчат.jpg' <br>Один из древнейших населённых пунктов области,бывшая столица Золотой Орды в регионе (город Мохши). Сейчас это небольшое село, известное как родина писателя А.И. Куприна, с музеем в его честь, а также уникальным пещерным комплексом в Троице-Скановом монастыре.").openPopup();

var LermonBibl = L.marker([53.220681, 44.883901]).addTo(map);
LermonBibl.bindPopup("<b style = 'font-size: 15px'>Лермонтовская библиотека (Пензенская областная библиотека имени М.Ю. Лермонтова)</b> <img style='width: 300px; display: block;' src='images1/Библиотека.jpg' <br>Крупнейшая и старейшая публичная библиотека региона,основанная в 1892 году. Располагается в историческом здании на проспекте Строителей и является главным книгохранилищем и культурно-просветительским центром области, носящим имя великого поэта, связанного с пензенским краем.").openPopup();



var Pervoposelen = L.marker([53.183283, 45.01632]).addTo(map);
Pervoposelen.bindPopup("<b style = 'font-size: 15px'>Памятник Первопоселенец</b> <img style='width: 300px; display: block;' src='images1/Первопоселенец.jpg' <br>Символ города у его истоков. Монументальная фигура крестьянина-воина, одной рукой пашущего землю, а другой держащего копьё. Это воплощение двойного призвания Пензы: быть и хлебной житницей, и щитом на рубежах России. Отсюда начинается история.").openPopup();


var Tarhany = L.marker([52.992622, 43.674328]).addTo(map);
Tarhany.bindPopup("<b style = 'font-size: 15px'>Тарханы</b> <img style='width: 300px; display: block;' src='images1/Первопоселенец.jpg' <br>Здесь время замедляет ход. Бывшее родовое имение Лермонтова, где прошла половина жизни поэта. Тенистые аллеи парка, барский дом с подлинными вещами, тихие пруды — всё дышит эпохой и хранит память о мятежном гении, чья душа тосковала по этим местам.").openPopup();


var Naberegnaya = L.marker([53.192355, 45.025493]).addTo(map);
Naberegnaya.bindPopup("<b style = 'font-size: 15px'>Набережная реки Суры</b> <img style='width: 300px; display: block;' src='images1/Набережная.jpg' <br>Живописная панорамная визитная карточка города. Любимое место для прогулок, где современные арт-объекты гармонируют с видами на исторический центр и купола соборов. Идеальный пункт, чтобы почувствовать ритм и дыхание Пензы.").openPopup();

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
