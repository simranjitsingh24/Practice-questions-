let abc = document.querySelector(".hell");
console.log(abc);
let d = document.querySelectorAll(".hell");
console.log(d);
let e = document.getElementById("he");
console.log(e);
let f = document.getElementsByClassName("hell");
console.log(f);
let g = document.getElementsByTagName("h2");
console.log(g);
// text contant add text content
let ele = document.createElement("p");
ele.textContent = "hello-world";
// abc.prepend(ele);
abc.append(ele);
// classlist.add for add the class
ele.classList.add("para");
console.log(ele);

let para = document.querySelector(".par");
para.remove();
