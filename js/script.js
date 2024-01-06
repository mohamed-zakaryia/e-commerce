let slider = document.querySelector(".wrapper");
let lists = document.querySelectorAll(".lists li a ");

let products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: "$199",
    colors: [
      {
        code: "#000000",
        imdageUrl: "imgs/air.png",
      },
      {
        code: "#00008b",
        imdageUrl: "imgs/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "AIR JORDAN",
    price: "$149",
    colors: [
      {
        code: "#d3d3d3",
        imdageUrl: "imgs/jordan.png",
      },
      {
        code: "#008000",
        imdageUrl: "imgs/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: "$109",
    colors: [
      {
        code: "#d3d3d3",
        imdageUrl: "imgs/blazer.png",
      },
      {
        code: "#008000",
        imdageUrl: "imgs/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "CRATER",
    price: "$129",
    colors: [
      {
        code: "#000000",
        imdageUrl: "imgs/crater.png",
      },
      {
        code: "#d3d3d3",
        imdageUrl: "imgs/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: "$99",
    colors: [
      {
        code: "#808080",
        imdageUrl: "imgs/hippie.png",
      },
      {
        code: "#000000",
        imdageUrl: "imgs/hippie2.png",
      },
    ],
  },
];
let choosenItem = products[0];
let imgPrd = document.querySelector(".img-prd");
let prdHeader = document.querySelector(".prd-header");
let prdPrice = document.querySelector(".prdPrice");
let prdColor = document.querySelectorAll(".prd-rightColor p");
let prdSizes = document.querySelectorAll(".size1");
lists.forEach((item, index) => {
  item.addEventListener("click", () => {
    slider.style.transform = `translate(${-100 * index}vw)`;
    choosenItem = products[index];
    prdHeader.textContent = choosenItem.title;
    prdPrice.textContent = choosenItem.price;
    imgPrd.src = choosenItem.colors[0].imdageUrl;
    prdColor.forEach((item, indexes) => {
      item.style.backgroundColor = choosenItem.colors[indexes].code;
    });
  });
});

prdColor.forEach((item, indexes) => {
  item.addEventListener("click", () => {
    imgPrd.src = choosenItem.colors[indexes].imdageUrl;
  });
});

prdSizes.forEach((item, indexes) => {
  item.addEventListener("click", () => {
    prdSizes.forEach((item) => {
      item.style.backgroundColor = "white";
      item.style.color = "black";
    });
    item.style.backgroundColor = "black";
    item.style.color = "white";
  });
});

let btnBuy = document.querySelector(".buySec");
let checkout = document.querySelector(".checkout");
let exit = document.querySelector(".exit");

btnBuy.addEventListener("click", () => {
  checkout.style.display = "flex";
});

exit.addEventListener("click", () => {
  checkout.style.display = "none";
});