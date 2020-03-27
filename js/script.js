var link = document.querySelector(".contact-button");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var textarea = popup.querySelector("[name=textarea]");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]")


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show")
  if (storage) {
    name.value = storage;
  }

  textarea.focus();
});


  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!textarea.value || !name.value || !email.value) {
  evt.preventDefault();
  console.log("Нужно ввести текст");
} else {
  if (isStorageSupport) {
  localStorage.setItem("name", name.value);
  }
}
});
