import "./style/main.scss";
import Swiper from "swiper";

const mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    1600: {
      slidesPerView: 1.4,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  pagination: {
    el: ".swiper-pagination"
  }
});

function showPassword() {
  const input = document.querySelector("#password");
  const btn = document.querySelector("#js-btn");
  btn.addEventListener("click", e => {
    e.preventDefault();
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
}

function validForm() {
  const form = document.querySelector("#js-form");
  const btn = document.querySelector("#js-submit");

  btn.addEventListener("click", e => {
    let fail = false;
    let email = form.email.value;
    let password = form.password.value;
    console.log("form", form.email.value);
    if (email == "" || email == " ") {
      fail = "Вы не ввели email";
    } else if (password == "" || password == " ") {
      fail = "Вы не ввели password";
    }
    if (fail) {
      alert(fail);
    } else {
      window.location = "http://google.com";
      alert("Форма успешно отправлена");
    }
  });
}

validForm();
showPassword();
