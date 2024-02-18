function openMeal(evt, mealName) {
    var i, tabcontent, tablinks, cards;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));

    var activeTabContent = document.getElementById(mealName);
    activeTabContent.classList.add("active");

    evt.currentTarget.classList.add("active");

    var activeCards = activeTabContent.querySelectorAll('.card');
    activeCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('active');
        }, index * 100);
    });
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.getElementById("dinner-button").click();


window.onscroll = function () {
    var header = document.querySelector('header');
    
    if (window.scrollY > 300) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };
  