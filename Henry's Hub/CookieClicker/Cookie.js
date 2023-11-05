const cookieButton = document.getElementById("cookie");
const cookiesDisplay = document.getElementById("cookies");
const upgradeButton1 = document.getElementById("upgrade1");
const upgradeButton2 = document.getElementById("upgrade2");
const upgradeButton3 = document.getElementById("upgrade3");
const upgradeButton4 = document.getElementById("upgrade4");
const upgradeButton5 = document.getElementById("upgrade5");
const upgradeButton6 = document.getElementById("upgrade6");
const upgradeButton7 = document.getElementById("upgrade7");
const upgradeButton8 = document.getElementById("upgrade8");
const upgradeButton9 = document.getElementById("upgrade9");
const upgradeButton10 = document.getElementById("upgrade10");

let cookies = 0;
let clickPower = 1;
let bakerprice = 10;
let grandmaprice = 50;
let factoryprice = 100;
let bankprice = 1000;
let templeprice = 10000;
let wizardprice = 100000;
let alchemistprice = 1000000;
let priestprice = 10000000;
let mageprice = 100000000;
let chefprice = 1000000000;
let minerprice = 10000000000;

//manage the cookies when the button is clicked
function updateCookieCount() {
    cookiesDisplay.textContent = cookies + " cookies";
}
cookieButton.addEventListener("click", () => {
    cookies += clickPower;
    updateCookieCount();
});