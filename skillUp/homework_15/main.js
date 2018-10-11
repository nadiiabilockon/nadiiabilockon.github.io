// 1
for(var i = 20; i < 41; i++){
    if(i % 2 == 0) continue;
   console.log(i); 
}

//2
function sqr(a,b){
    return a **b;
}
console.log(sqr(2,9));

//3 
var num;

while (true) {
    num = +prompt("Введите число от 10 и более", "");
    if (num >= 10) {
        alert("Успешно!");
        break;
    } else if (num == +false) {
       break;
    } else {
        alert("Попробуйте еще раз");
        continue;
}};