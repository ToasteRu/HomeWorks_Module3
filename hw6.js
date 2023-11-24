//1. Функция User
function User (name){
    this.name = name;
}
let newUser = new User("Nikita");
console.log(newUser);

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

//Домашняя работа №6 Добавим неизменямое поле ID
Object.defineProperty(newUser, "ID",{
    writable: false,
    value: 185,
})
console.log(newUser);

//Домашняя работа №6 Метод getInfo
userObj.user = newUser;
userObj.getInfo = function(){
    return `Пользователь ${this.user.name} имеет ${this.articles.length} статьи`;
};

console.log(userObj.getInfo());