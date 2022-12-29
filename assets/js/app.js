var cl = console.log;
//alert("hello")

const roseflower = document.getElementById("roseflower");
cl(roseflower);

const all = Array.from(document.querySelectorAll(".all"));
cl(all);

const onchangeimg = (eve) => {
  let getimg = eve.target.value;
  cl(getimg);
  all.forEach(div => div.classList.add("d-none"));

  let getdivs = Array.from(document.querySelectorAll("." + getimg));
  getdivs.forEach(div => div.classList.remove("d-none"));

}
roseflower.addEventListener("change", onchangeimg);