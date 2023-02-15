let url = "https://dummyjson.com/products";
document.addEventListener("DOMContentLoaded", () => {
  function fetchCall() {
    fetch(url)
      .then((response) => response.json())
      .then((value) => {
        dataConverter(value);
      })
      .catch((err) => controlError(err));
  }

  fetchCall();

  function dataConverter(param) {
    for (data of param) {
      console.log(data);
    }
  }
  function controlError(param) {
    console.log(param);
  }

  const container = document.createElement("div");
  const firstPTag = document.createElement("p");
  const secondPTag = document.createElement("p");
  const thirdPTag = document.createElement("p");
  const fouthPTag = document.createElement("p");

  container.className = "containter";
  firstPTag.className = "firstPtag";
  secondPTag.className = "secondPtag";
  thirdPTag.className = "thirdPtag";
  fouthPTag.className = "fourthPtag";

  firstPTag.textContent = "first P tag";
  secondPTag.textContent = "second P tag";
  thirdPTag.textContent = "third P tag";
  fouthPTag.textContent = "fourth P tag";

  container.style.backgroundColor = "black";

  firstPTag.style.fontSize = "20px";
  secondPTag.style.color = "blue";
  firstPTag.style.fontWeight = "500";

  container.append(firstPTag, secondPTag, thirdPTag, fouthPTag);
  const mainBody = document.querySelector(".mainBody");
  mainBody.append(container);
  mainBody.style.width = "100%";
  mainBody.style.backgroundColor = "white";
});
