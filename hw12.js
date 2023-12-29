let user = {
    name: "Nik",
    age: 26,
    articles: [{name:"Почему я пошел на курс к Алексею"},{name:"Чем я занимаюсь сейчас"},{name:"Внедрение CRM системы PlanFix в бизнес"},{name:"Какой музыкальный фестиваль я хочу посетить"}],
};

function logUsersArticles() {
    let userArticles = this.articles;
    userArticles.forEach((article, index) => {
    console.log(`Название статьи ${index+1} ${article.name}`);
    });
};

user.logDataArticles = logUsersArticles;
user.logDataArticles();