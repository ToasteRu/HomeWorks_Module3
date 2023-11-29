//Создайте объект пользователя у которого будет массив статей
let user = {
    name: "Nik",
    age: 26,
    articles: [{name:"Почему я пошел на курс к Алексею"},{name:"Чем я занимаюсь сейчас"},{name:"Внедрение CRM системы PlanFix в бизнес"},{name:"Какой музыкальный фестиваль я хочу посетить"}]
}
//Выведите в консоль все поля пользователя
for (const key in user) {        
    console.log(key);
}
//Создайте функцию, которая будет принимать пользователя в качестве параметра и выводить в консоль текст 
function sayText(user) {
    for (let index = 0; index < user.articles.length; index++){
        console.log(`Название статьи ${index+1} ${user.articles[index].name}`);
    }
}
sayText(user)