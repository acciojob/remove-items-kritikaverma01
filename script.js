//your JS code here. If required.
function removeColor() {
  const select = document.getElementById("colorSelect");

  if (select.selectedIndex !== -1) {
    select.remove(select.selectedIndex);
  }
}

const button = document.querySelector('input[type="button"]');
button.addEventListener("click", removeColor);