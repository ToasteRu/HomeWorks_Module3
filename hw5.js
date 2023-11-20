//1. Функция User
function User (name){
    this.name=name;
}
let newUser = new User("Nikita");
console.log(newUser);
//2. Функция Article
function Article(ArtName,ArtTxt) {
    this.name=ArtName;
    this.text=ArtTxt;
}
let newArticle = new Article("Чем я занимаюсь сейчас","Работаю в CRM-системе ПланФикс.")
console.log(newArticle);
//3. Объект пользователя
let userObj = {};
//4. Массив из 2 объектов статей
let newArticle2 = new Article("Какой музыкальный фестиваль я хочу посетить","Tomorrowland, который проводится 4 раза в год в Бельгии");
let Array = [newArticle,newArticle2];
console.log(Array);
//5. Добавим поле articles (здесь храним массив статей) в объект
userObj.articles=Array;
console.log(userObj);