import "./index.css";
const toggleReligionDropdown = (e) => {
  document.querySelector(".religion-list").style.display = "block";
  e.stopPropagation();
  let listener = () => {
    document.querySelector(".religion-list").style.display = "none";
    document.body.removeEventListener("click", listener);
  };
  document.body.addEventListener("click", listener);
};

const selectReligion = (e) => {
  document.querySelector(".religion-text").textContent = e.target.dataset.value;
};

const handleSubmit = (e) => {
  // do data validation here
  // display error message is data is invalid
  document.querySelector(".info-toast").style.transition =
    "all .2s ease-in-out";
  document.querySelector(".info-toast").style.transform = "translateX(0)";

  setTimeout(() => {
    document.querySelector(".info-toast").style.transform = "translateX(200%)";
  }, 5000);
};

const correspondenceAddressListener = (e) => {
  const permanentAddressChangeListener = () => {
    document.querySelector(`textarea[name='current-address']`).value =
      document.querySelector(`textarea[name='permanent-address']`).value;
  };
  if (e.target.checked) {
    document.querySelector(`textarea[name='current-address']`).disabled = true;
    document.querySelector(`textarea[name='current-address']`).value =
      document.querySelector(`textarea[name='permanent-address']`).value;
    document
      .querySelector(`textarea[name='permanent-address']`)
      .addEventListener("input", permanentAddressChangeListener);
  } else {
    document.querySelector(`textarea[name='current-address']`).disabled = false;
    document
      .querySelector(`textarea[name='permanent-address']`)
      .removeEventListener("input", permanentAddressChangeListener);
  }
};

document
  .querySelector(".religion-text")
  .addEventListener("click", toggleReligionDropdown);
document
  .querySelector(".religion-item")
  .addEventListener("click", selectReligion);
document
  .querySelector(`input[name='permanent-address-same-as-correspondence']`)
  .addEventListener("click", correspondenceAddressListener);
document
  .querySelector(".registration-form")
  .addEventListener("submit", handleSubmit);
document.querySelector(".religion-list").style.display = "none";
