//Создайте два объекта пользователей
let user1 = {name: "Nik"};
let user2 = {name: "Andrew"};

//Создайте два массива с объектами “статьи” внутри
let article1Obj = {name: "Какой музыкальный фестиваль я хочу посетить"};
let article2Obj = {name: "Чем я занимаюсь сейчас"};

let article1Array = [article1Obj];
let article2Array = [article2Obj];

//Создайте Map в котором в качестве ключей передайте пользователей, а в качестве значений массивы со статьями
let userMap = new Map();
userMap.set(user1, article1Array);
userMap.set(user2, article2Array);

//Создайте функцию, которая будет принимать массив значений, а возвращать массив в котором только уникальные значения. Внутри функции использовать конструкцию Set
function uniqueValue(array){
    let unique = new Set (array);
    let uniqueArr = Array.from(unique)
    return uniqueArr;
}