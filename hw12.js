function userData (name,age){
    const nameDefault = "Nikita";
    const ageDefault = 26;
    if (!name){
        let name = nameDefault;
    };
    if (!age){
        let age = ageDefault;
    };
    function returningFunc(){
        return {
            name: name,
            age: age,
        }
    };
    return returningFunc;
};

let user1 = userData("Jim", 34);
console.log(user1());