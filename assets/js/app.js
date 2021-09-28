const header = document.querySelector(".header");

const menuItems = document.querySelectorAll('.navbar__list a[href *= "#"]');

const mobileBtn = document.querySelector(".navbar-mobile");

var heightHeader = header.clientHeight;

function openAndCloseMenuMobile() {
  var isClose = header.clientHeight === heightHeader;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
}

mobileBtn.addEventListener("click", openAndCloseMenuMobile);

for (let i = 0; i < menuItems.length; i++) {
  const menuItem = menuItems[i];
  menuItem.onclick = function (e) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("sub-navbar");

    if (isParentMenu) {
      e.preventDefault();
      // header.style.overflow = "visible";
    } else {
      header.style.height = null;
      // header.style.overflow = null;
    }
  };
}
