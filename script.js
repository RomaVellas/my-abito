const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");

const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 1,
    title: "Первый товар",
    price: "170 ₽",
    date: "10 июля 11:39",
    address: "Казань, р-н Вахитовский",
    img: "./image/card-img.png",
  },
  {
    id: 2,
    title: "Второй товар",
    price: "171 ₽",
    date: "10 июля 11:39",
    address: "Казань, р-н Вахитовский",
    img: "./image/card-img.png",
  },
  {
    id: 3,
    title: "Третий товар",
    price: "172 ₽",
    date: "10 июля 11:39",
    address: "Казань, р-н Вахитовский",
    img: "./image/card-img.png",
  },
  {
    id: 4,
    title: "Четвёртый товар",
    price: "173 ₽",
    date: "10 июля 11:39",
    address: "Казань, р-н Вахитовский",
    img: "./image/card-img.png",
  },
  {
    id: 5,
    title: "Пятый товар",
    price: "174 ₽",
    date: "10 июля 11:39",
    address: "Казань, р-н Вахитовский",
    img: "./image/card-img.png",
  },
  {
    id: 6,
    title: "Шестой товар",
    price: "175 ₽",
    date: "10 июля 11:39",
    address: "Казань, р-н Вахитовский",
    img: "./image/card-img.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";

  cardList.forEach((card) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
               <a href="/product.html" class="content-main__list-item">
                  <div class="content-main__list-item--img">
                     <img src="${card.img}" alt="${card.title}" />
                  </div>
                  <h5 class="content-main__list-item--title">${card.title}</h5>
                  <strong class="content-main__list-item--price">${card.price}</strong>
                  <div class="content-main__list-item--desc-box">
                     <span class="content-main__list-item--desc">${card.address}</span>
                     <span class="content-main__list-item--desc">${card.date}</span>
                  </div>
               </a>   
      `
    );
  });
};

const filteredCardList = (cardList, value) => {
  return cardList.filter((card) => {
    return card.title.includes(value) || card.price.includes(value);
  });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredCardList(cardArray, searchInput.value));
});
