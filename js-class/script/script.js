// console.log(document.body.firstElementChild);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].lastElementChild.innerHTML)

// let div = document.createElement("div");
// let p = document.createElement("p");
// p.innerText ="This is a p tag";
// // or
// p.append("this is a p tag");
// div.append(p);
// console.log(document.body.appendChild(div))

let div2 = div.cloneNode(true); // clone the message
div2.querySelector("strong").innerHTML = "Bye there"; //change the clone
div.after(div2); // show the clone after the existing div
