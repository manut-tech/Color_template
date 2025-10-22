const textElements = document.querySelectorAll(".js-copy-color-code");
const textAlert = document.querySelector(".js-text-alert");
const checkedIcon = "/Icon/greenchecked.png";

textElements.forEach((element) => {
  let isClickAble = true;
  element.addEventListener("click", () => {
    if (!isClickAble) {
      return;
    }
    isClickAble = false;
    const text = element.textContent; // text it presence text in side element

    const tempInput = document.createElement("textarea");
    tempInput.value = text; // to get text content
    document.body.appendChild(tempInput);
    tempInput.select(); //select atribute use for : when we click the element so that element will be select
    document.execCommand("copy"); // use for conmmand the action we want to access like copy, delete...  and it work with document only
    document.body.removeChild(tempInput); // this case doesn't matter because it depend on the element you want to copy and keep it or not if you want to keep it don't use this and for this case the element won't remove because the text content been prsecnting in javascript
    // show icon
    const img = document.createElement("img"); //to get image element from file
    img.src = checkedIcon;
    img.style.width = "20px";
    element.appendChild(img);
    img.className = "checked-icon-green";
    // textAlert.innerHTML = "copied";

    // textAlert.style.display = "block";
    setTimeout(() => {
      textAlert.classList.add("css-trasiton");
      // textAlert.style.display = "none";
      img.style.display = "none";
      // alert("copied");
    }, 1000);
  });
});
