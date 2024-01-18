// function Article(name,text){
//     this.name = name;
//     this.text = text;
// };

class Article{
    constructor(name, text){
        this.name = name;
        this.text = text;
    };
};

// function User(name,articles){
//     this.name = name;
//     this.articles = articles;
// };
class User{
    constructor(name, articles){
        this.name = name;
        this.articles = articles;
    };

    logArticles = function(){
        let userArticles = this.articles;
        userArticles.forEach((article, index) => {
            console.log(`Название статьи ${index + 1} ${article.name}`);
        });
    };
};

let article1 = new Article("Почему я пошел на курс к Алексею","Чтобы прокачаться в JS");
let article2 = new Article("Какой музыкальный фестиваль я хочу посетить","Tomorrowland");
let user1 = new User ("Nik", [article1, article2]);

user1.logArticles();