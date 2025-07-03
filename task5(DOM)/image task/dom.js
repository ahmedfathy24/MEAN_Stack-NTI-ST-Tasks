const img = document.querySelector("img");
img.style.position = "fixed";
img.style.top = "0";
img.style.right = "0";

const list = document.getElementById("navigation");
list.style.position = "absolute";
list.style.top = "50%";
list.style.left = "50%";
list.style.transform = "translate(-50%, -50%)";

const copiedImg = img.cloneNode(true);
copiedImg.style.top = "";
copiedImg.style.right = "";
copiedImg.style.position = "fixed";
copiedImg.style.bottom = "0";
copiedImg.style.left = "0";
document.body.appendChild(copiedImg);
