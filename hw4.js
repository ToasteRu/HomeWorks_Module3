function returnArticle (name="Будет известно совсем скоро") {
    console.log("Название новой статьи - ", name);   
}
returnArticle("Чем я занимаюсь сейчас");

function exponentiation (number1,number2) {
    console.log(number1**number2);
}
exponentiation(5,3);

const oneExp = (number1,number2) => {
    let res = number1**number2;
    return res;
};
console.log(oneExp(4,4));

const twoExp = (num1, num2) => num1**num2;
console.log(twoExp(3,3));