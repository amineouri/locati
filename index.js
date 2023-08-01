window.addEventListener("scroll", () =>{
    let header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 100)
})

        /*============================================*/


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
        /*============================================*/

  document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value
    var pickupplace = document.getElementById("Lieu").value;
    var pickupDate = document.getElementById("pickup-date").value;
    var returnDate = document.getElementById("return-date").value;
    var carType = document.getElementById("car-type").value;
    alert("bonjour " + name + " ,votre réservation a été prise en charge. Date de prise en charge: " + pickupDate + ", depuis:"+ pickupplace + ", Date de retour: " + returnDate + ", Type de véhicule: " + carType);
  });

        /*============================================*/

  
      let menuIcon = document.querySelector('#hamburger');
      let navbar = document.querySelector('.navbar');
      
    hamburger.addEventListener("click", ()=>{
      menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
        });

        /*============================================*/

      document.querySelectorAll(".nav-link").forEach(n => n. addEventListener ("click", () => {
          menuIcon.classList.remove('bx-x');
          navbar.classList.remove('active');
        }));
        /*============================================*/

        let activeButton = null;
      
        function setDefaultActiveButton() {
          const bmwButton = document.getElementById('bmw');
          changeImageAndButtonColor('bmw.png', bmwButton);
        }
      
        function changeImageAndButtonColor(imageSrc, button) {
          const carImage = document.getElementById('car-image');
          const carPrix = document.getElementById('carprix');
        const carMarque = document.getElementById("carmarque");
        const carModel = document.getElementById("carmodel")
          const carMod = document.getElementById('carmod');
          const carEner = document.getElementById('carener');
          const carPlaces = document.getElementById('carplaces');
          const carPuiss = document.getElementById('carpuiss');
      
          if (activeButton) {
            activeButton.classList.remove('active');
          }
      
          button.classList.add('active');
          carImage.src = imageSrc;
      
          
          if (button.id === 'bmw') {
            carPrix.textContent = '30€/jour';
            carMarque.textContent = 'BMW'
            carModel.textContent = 'M3'
            carMod.textContent = '2020';
            carEner.textContent = 'Essence';
            carPlaces.textContent = '5 places';
            carPuiss.textContent = '250cv';
          } else if (button.id === 'alfaromeo') {
            carPrix.textContent = '35€/jour';
            carMarque.textContent = 'Alfa-Romeo'
            carModel.textContent = 'M3'
            carMod.textContent = '2021';
            carEner.textContent = 'Essence';
            carPlaces.textContent = '4 places';
            carPuiss.textContent = '280cv';
          } else if (button.id === 'audi') {
            carPrix.textContent = '40€/jour';
            carMarque.textContent = 'Audi'
            carModel.textContent = 'M3'
            carMod.textContent = '2019';
            carEner.textContent = 'Diesel';
            carPlaces.textContent = '5 places';
            carPuiss.textContent = '220cv';
          }else if (button.id === 'audi') {
            carPrix.textContent = '40€/jour';
            carMarque.textContent = 'Audi'
            carModel.textContent = 'M3'
            carMod.textContent = '2019';
            carEner.textContent = 'Diesel';
            carPlaces.textContent = '5 places';
            carPuiss.textContent = '220cv';
          }else if (button.id === 'audi') {
            carPrix.textContent = '40€/jour';
            carMarque.textContent = 'Audi'
            carModel.textContent = 'M3'
            carMod.textContent = '2019';
            carEner.textContent = 'Diesel';
            carPlaces.textContent = '5 places';
            carPuiss.textContent = '220cv';
          }else if (button.id === 'audi') {
            carPrix.textContent = '40€/jour';
            carMarque.textContent = 'Audi'
            carModel.textContent = 'M3'
            carMod.textContent = '2019';
            carEner.textContent = 'Diesel';
            carPlaces.textContent = '5 places';
            carPuiss.textContent = '220cv';
          }
          
      
          activeButton = button;
        }