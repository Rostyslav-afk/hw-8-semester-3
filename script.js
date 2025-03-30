//#1 Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
// 👉 Потім через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i += 1) {
    string += friends[i];
    if (i < friends.length - 1) {
        string += ",";
    }
}

console.log(string);
console.log(friends.join(","));


//#2 Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5']
console.log(`Карточки(2 завдання): ${cards}`);

//#3 Видалити
cards.splice(2, 1)
console.log(`Карточки(3 завдання): ${cards}`);


//#4 Додати
cards.splice(4  , 0, "Карточка-6")
console.log(`Карточки(4 завдання): ${cards}`);


//#5 Оновити
cards.splice(2, 1, "Оновлена карточка-4")
console.log(`Карти(5 завдання): ${cards}`);
