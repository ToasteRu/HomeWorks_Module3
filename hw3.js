let articlesArray = ["Почему я пошел на курс к Алексею","Чем я занимаюсь сейчас","Какой музыкальный фестиваль я хочу посетить"];

articlesArray.unshift("Внедрение CRM системы PlanFix в бизнес");

console.log("Порядковый номер статьи - ",articlesArray.indexOf("Чем я занимаюсь сейчас")+1);

let shiftArticle1 = articlesArray.shift();
console.log(shiftArticle1);
let popArticle2 = articlesArray.pop();
console.log(popArticle2);
let popArticle3 = articlesArray.pop();
console.log(popArticle3);
let popArticle4 = articlesArray.pop();
console.log(popArticle4);