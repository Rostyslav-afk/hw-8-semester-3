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
const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5', 'Карточка-6']
cards.splice(3, 1, 'банани', 'помідори')
console.log(`Карточки(2 завдання): ${cards}`);

//#3 Видалити
const cardToRemove = ['Карточка-3']
cardToRemove.splice(0,1)
console.log(`Карточки(3 завдання): ${cardToRemove}`);


//#4 Додати
const cardToInsert = ['Карточка-6']
cardToInsert.splice(0, 0, "Карточка-5")
console.log(`Карточки(4 завдання): ${cardToInsert}`);


//#5 Оновити
const cardToUpdate = ['Карточка-4']
cardToUpdate.splice(0, 1, "Карточка-1")
console.log(`Карти(5 завдання): ${cardToUpdate}`);
