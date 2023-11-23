//1. Функция User
function User (name){
    this.name = name;
}
let newUser = new User("Nikita");
console.log(newUser);
//Домашняя работа №6 Добавим неизменямое поле ID
Object.defineProperty(User, "ID",{
    writable: false,
    value: 185,
})

//Домашняя работа №6 Метод getInfo
User.getInfo = function(){
    return `Пользователь ${this.name} имеет ${this.articles.length} статей`;
};

//2. Функция Article
function Article(artName,artTxt) {
    this.name=artName;
    this.text=artTxt;
}
let newArticle = new Article("Чем я занимаюсь сейчас","Работаю в CRM-системе ПланФикс.")
console.log(newArticle);
//3. Объект пользователя
let userObj = {};
//4. Массив из 2 объектов статей
let newArticle2 = new Article("Какой музыкальный фестиваль я хочу посетить","Tomorrowland, который проводится 4 раза в год в Бельгии");
let artArray = [newArticle,newArticle2];
console.log(artArray);
//5. Добавим поле articles (здесь храним массив статей) в объект
userObj.articles=artArray;
console.log(userObj);

console.log(User.getInfo());