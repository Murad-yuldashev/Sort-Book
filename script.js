var books = [
  {
    firstName: "Джоан",
    lastName: "Роулинг",
    title: "Гарри Потер",
    rating: 4.707,
    genre: "child, fantastic",
  },
  {
    firstName: "Александр",
    lastName: "Дюма",
    title: "Граф Монте-Кристо",
    rating: 4.599,
    genre: "child",
  },
  {
    firstName: "Марио",
    lastName: "Пьюзо",
    title: "Крестный отец",
    rating: 4.577,
    genre: "detective",
  },
  {
    firstName: "Джон",
    lastName: "Толкиен",
    title: "Властелин колец",
    rating: 4.572,
    genre: "child, fantastic",
  },
  {
    firstName: "Дениэл",
    lastName: "Киз",
    title: "Цветы для Элджернона",
    rating: 4.566,
    genre: "child, fantastic",
  },
  {
    firstName: "Агата",
    lastName: "Кристи",
    title: "Десять негритят",
    rating: 4.55,
    genre: "detective",
  },
  {
    firstName: "Виктор",
    lastName: "Драгунский",
    title: "Денискины рассказы",
    rating: 4.543,
    genre: "child",
  },
  {
    firstName: "Артур Конан",
    lastName: "Дойль",
    title: "Рассказы о Шерлоке Холмсе",
    rating: 4.522,
    genre: "child, detective",
  },
  {
    firstName: "Джеймс",
    lastName: "Хэрриот",
    title: "О всех созданиях - больших и малых",
    rating: 4.5,
    genre: "child",
  },
  {
    firstName: "Вениамин",
    lastName: "Каверин",
    title: "Два капитана",
    rating: 4.493,
    genre: "child",
  },
  {
    firstName: "Александр",
    lastName: "Волков",
    title: "Волшебник Изумрудного города",
    rating: 4.491,
    genre: "child",
  },
  {
    firstName: "Джек",
    lastName: "Лондон",
    title: "Белый Клык",
    rating: 4.48,
    genre: "child",
  },
  {
    firstName: "Жюль",
    lastName: "Верн",
    title: "Таинственный остров",
    rating: 4.479,
    genre: "child, fantastic",
  },
  {
    firstName: "Туве",
    lastName: "Янсон",
    title: "Муми-тролль",
    rating: 4.456,
    genre: "child",
  },
  {
    firstName: "Астрид",
    lastName: "Линдгрен",
    title: "Малыш и Карлсон, который живёт на крыше",
    rating: 4.437,
    genre: "child",
  },
  {
    firstName: "Алан Александер",
    lastName: "Милн",
    title: "Винни Пух и все-все-все",
    rating: 4.391,
    genre: "child",
  },
  {
    firstName: "Александр",
    lastName: "Дюма",
    title: "Три мушкетёра",
    rating: 4.394,
    genre: "child",
  },
  {
    firstName: "Астрид",
    lastName: "Линдгрен",
    title: "Пеппи Длинныйчулок",
    rating: 4.394,
    genre: "child",
  },
  {
    firstName: "Марк",
    lastName: "Твен",
    title: "Приключения Тома Сойера",
    rating: 4.354,
    genre: "child",
  },
  {
    firstName: "Клайв",
    lastName: "Льюис",
    title: "Хроники Нарнии",
    rating: 4.363,
    genre: "child, fantastic",
  },
];

let allListSort = document.querySelector(".all-list");
let authorSort = document.querySelector(".author");
let ratingSort = document.querySelector(".rating");

let list = document.querySelector(".list");

// All List
allListSort.addEventListener("click", () => {
  list.innerHTML = "";
  books.forEach((item, ind) => {
    let p = document.createElement("p");
    p.innerHTML = `${ind + 1}) ${item.title}`;
    list.appendChild(p);
  });
});

// Author Sort
authorSort.addEventListener("click", () => {
  list.innerHTML = "";
  let sortAuthor = books.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
  sortAuthor.forEach((item, ind) => {
    let p = document.createElement("p");
    p.innerHTML = `${ind + 1}) ${item.firstName} ${item.lastName}`;
    list.appendChild(p);
  });
});

// Rating Sort
ratingSort.addEventListener("click", () => {
  list.innerHTML = "";
  let sortRating = books.sort((a, b) => b.rating - a.rating);
  sortRating.forEach((item, ind) => {
    let p = document.createElement("p");
    p.innerHTML = `${ind + 1}) ${item.firstName} ${item.lastName} ${item.rating}`;
    list.appendChild(p);
  });

});



// Right List
let childrenBooks = document.querySelector('.children-books');
let fantasticBooks = document.querySelector('.fantastic');
let detectiveBooks = document.querySelector('.detective');

let rightList = document.querySelector('.right-list');

// Child Books
childrenBooks.addEventListener('click', () => {
  rightList.innerHTML = '';
  let childBooks = books.filter((item, ind) => item.genre === 'child');

  childBooks.forEach((item, ind) => {
    let p = document.createElement('p');
    p.innerHTML = `${ind + 1}) ${item.firstName} ${item.lastName} ${item.genre}`;
    rightList.appendChild(p)
  })
})

// Fantastic Books
fantasticBooks.addEventListener('click', () => {
  rightList.innerHTML = '';
  let fantasticBook = books.filter(item => item.genre == 'child, fantastic');

  fantasticBook.forEach((item, ind) => {
    let p = document.createElement('p');
    p.innerHTML = `${ind + 1}) ${item.firstName} ${item.lastName} ${item.genre}`;
    rightList.appendChild(p)
  })
})

// Detective Books
detectiveBooks.addEventListener('click', () => {
  rightList.innerHTML = '';
  let detectiveBook = books.filter(item => item.genre == 'detective' || item.genre == 'child, detective');

  detectiveBook.forEach((item, ind) => {
    let p = document.createElement('p');
    p.innerHTML = `${ind + 1}) ${item.firstName} ${item.lastName} ${item.genre}`;
    rightList.appendChild(p)
  })
  console.log(detectiveBook);
})
