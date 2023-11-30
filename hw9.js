//Создайте объект пользователя у которого будет массив статей
let user = {
    name: "Nik",
    age: 26,
    articles: [{name:"Почему я пошел на курс к Алексею"},{name:"Чем я занимаюсь сейчас"},{name:"Внедрение CRM системы PlanFix в бизнес"},{name:"Какой музыкальный фестиваль я хочу посетить"}],
}
//Создайте функцию, которая будет принимать пользователя в качестве параметра и выводить в консоль текст 
//И далее текст, который будет зависеть от количества
function logNumberOfUserArticles(user) {
    let articleLength = user.articles.length;
    console.log(`У пользователя ${articleLength} статьи`);
    switch (articleLength) {
        case 0:
            console.log("Нужно добавить больше статей!");
            break;
        case 1:
            console.log("Нужно добавить больше статей!");
            break;
        case 2:
            console.log("Отличное начало!");
            break;
        case 3:
            console.log("Отличное начало!");
            break;
        default:
            console.log("Так держать!");
            break;
    }
};
logNumberOfUserArticles(user);