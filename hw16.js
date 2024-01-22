//Создайте 3 функции, которые ожидают какое-то время и затем выводят какой-то текст в консоль, используя промисы.

function promise1 (){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            console.log("promise1 here");
            resolve();
        }, 1000);
    });
};
function promise2 (){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            console.log("promise2 here");
            resolve();
        }, 1500);
    });
};
function promise3 (){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            console.log("promise3 here");
            resolve();
        }, 2000);
    });
};
//Вызовите эти функции последовательно два раза, используя then() и async/await.
promise1()
    .then(()=>{
        promise2()
    })
    .then(()=>{
        promise3()
    });

async function asyncFunc(){
    await promise1();
    await promise2();
    await promise3();
};
asyncFunc();