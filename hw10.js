//Создайте объект пользователя у которого будет массив статей
let user = {
    name: "Nik",
    age: 26,
    articles: [{name:"Почему я пошел на курс к Алексею"},{name:"Чем я занимаюсь сейчас"},{name:"Внедрение CRM системы PlanFix в бизнес"},{name:"Какой музыкальный фестиваль я хочу посетить"}],
}

//Создайте функцию с forEach, которая принимает пользователя в качестве параметра и выводит в консоль текст
function logUsersArticles(user) {
    let userArticles = user.articles;
    userArticles.forEach((article, index) => {
        console.log(`Название статьи ${index+1} ${article.name}`);
    });
    //С помощью функции map() измените массив статей пользователя добавив к каждой поле text с каким-то текстом по умолчанию, например “Текст статьи”
    let newUserArticles = userArticles.map(article=>{
        article.text = "Текст статьи"; 
        return article;
    });
    console.log(newUserArticles);
    //С помощью функции reduce() создайте строку, которая будет содержать все названия статей пользователя
    let stringAllUsersArticles = userArticles.reduce((previous, current)=>{
        return previous + current.name + ". ";
    },"");
    console.log(stringAllUsersArticles);
};

logUsersArticles(user);