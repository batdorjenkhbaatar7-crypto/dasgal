// const dayNames = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"];
// const schedule = [
//   ["Математик", "Англи хэл", "Түүх"],
//   ["Монгол хэл", "Физик"],
//   ["Математик", "Биеийн тамир", "Хими", "Англи хэл"],
//   ["Биологи", "Уран зохиол", "Математик"],
//   ["Мэдээлэл зүй", "Хөгжим"],
// ];
// const day = document.getElementById("day");
// const lessons = document.getElementById("lessons");
// const count = document.getElementById("count");

// for (let i = 0; i < dayNames.length; i++) {}
// function showDay(i) {
//   day.textContent = `📅 ${dayNames[i]}`;
//   lessons.textContent = `${schedule[i]}`;
//   count.textContent = `${schedule[i].length} хичээл`;
// }

// const districts = [
//   "Сүхбаатар",
//   "Чингэлтэй",
//   "Баянгол",
//   "Хан-Уул",
//   "Баянзүрх",
//   "Сонгинохайрхан",
// ];
// const fees = [3000, 3000, 4000, 5000, 4000, 6000];
// const result = document.getElementById("result");
// const district = document.getElementById("district");
// const check = document.getElementById("check");

// function checkFee() {
//   const inputVal = district.value.trim();
//   const index = districts.indexOf(inputVal);
//   if (inputVal === "") {
//     result.textContent = `✏️ Дүүргээ бич`;
//   } else {
//     if (index !== -1) {
//       result.textContent = `🚚 ${districts[index]}: ${fees[index]}`;
//     } else {
//       result.textContent = `😕 «${inputVal}» дүүрэгт хүргэлт хийдэггүй`;
//     }
//   }
// }

// const to = document.getElementById("to");
// const countFriend = document.getElementById("countFriend");
// const friends = ["Бат", "Сараа", "Ану", "Болд"];
// const resultFriend = [];
// let countFriendToo = 0;
// function addFriend(index) {
//   const test = resultFriend.includes(friends[index]);
//   if (test === false) {
//     countFriendToo++;
//     resultFriend.push(friends[index]);
//   }
//   to.textContent = `Хэнд: ${resultFriend}`;
//   countFriend.textContent = `${countFriendToo} хүн сонгосон`;
// }

// const photo = document.getElementById("photo");
// const position = document.getElementById("position");
// let countLoc = 1;
// const places = [
//   "🏔️ Хөвсгөл нуур",
//   "🏜️ Хонгорын элс",
//   "🌋 Хорго уул",
//   "🐎 Хустай нуруу",
//   "💧 Улаан цутгалан",
// ];

// function goPrev() {
//   countLoc--;
//   if (countLoc <= 0) {
//     countLoc = 5;
//   }
//   photo.textContent = `${places[countLoc - 1]}`;
//   position.textContent = `${countLoc}/${places.length}`;
// }

// function goNext() {
//   countLoc++;
//   if (countLoc >= 6) {
//     countLoc = 1;
//   }
//   photo.textContent = `${places[countLoc - 1]}`;
//   position.textContent = `${countLoc}/${places.length}`;
// }

// const total = document.getElementById("total");
// const histoy = document.getElementById("history");
// let points = [1, 2, 3];
// let score = [];
// let totalScore = 0;
// for (let i = 0; i < points.length; i++) {
//   let index = points[i];
//   function addPoints(index) {
//     score.push(index);
//   }
//   function undo() {
//     score.pop();
//   }
// }

// for (let i = 0; i < score.length; i++) {
//   totalScore += score[i];
// }

// const budget = document.getElementById("budget");
// const found = document.getElementById("found");
// const list = document.getElementById("list");
// const filterBtn = document.getElementById("filterBtn");

// const products = [
//   "☕ Кофе",
//   "🥐 Круассан",
//   "🥪 Сэндвич",
//   "🧃 Жүүс",
//   "🍰 Бялуу",
// ];
// const prices = [4500, 3500, 8900, 3000, 7500];
// function filterProducts() {
//   let sags = [];
//   const budgetVal = Number(budget.value.trim());
//   for (let i = 0; i < prices.length; i++) {
//     if (budgetVal >= prices[i]) {
//       sags.push(i);
//       const listProduct = {
//         name: products[sags[i]],
//         price: prices[sags[i]],
//       };
//     }
//   }
//   found.textContent = `${budgetVal}₮-д ${sags.length} бараа багтана`;
//   list.textContent = `${listProduct.name}-${listProduct.price}`;
// }

const scores = document.getElementById("scores").value.trim();
const average = document.getElementById("average");
const best = document.getElementById("best");
const failed = document.getElementById("failed");
const trimmed = scores.includes(",");

function calculate() {
  if (trimmed === true) {
    const dunguud = Number(scores.split(","));
    console.log(dunguud);
  }
}
