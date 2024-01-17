//Создайте функцию Article, принимающую в качестве параметров название статьи и текст
function Article(name,text){
    this.name = name;
    this.text = text;
};
// функцию User, принимающую в качестве параметров имя пользователя и массив статей.
function User(name,articles){
    this.name = name;
    this.articles = articles;
};

let article1 = new Article("Почему я пошел на курс к Алексею","Чтобы прокачаться в JS");
let article2 = new Article("Какой музыкальный фестиваль я хочу посетить","Tomorrowland");
let user1 = new User ("Nik", [article1, article2]);

//Через прототип добавьте для всех пользователей функцию logArticles, которая будет выводить порядковый номер и название всех статей (как в предыдущих уроках)
User.prototype.logArticles = function(){
    let userArticles = this.articles;
    userArticles.forEach((article, index) => {
      console.log(`Название статьи ${index + 1} ${article.name}`);
    });
};
user1.logArticles();