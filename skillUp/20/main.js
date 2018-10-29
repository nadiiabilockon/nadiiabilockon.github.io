// table №1

const myNodeList = document.querySelectorAll('.line');
const result = document.querySelector('.total'); 

NodeList.prototype.customEventListener = function (event_name, callback, useCapture){
    for (let i = 0; i < this.length; i++){
      this[i].addEventListener(event_name, callback, useCapture);
    }
};

function keyIsAvalible() {
    if (event.keyCode < 46 || event.keyCode == 47  || event.keyCode > 57 )
    event.returnValue = false;    
}

myNodeList.customEventListener('input', function(e) {
    let sum = 0;

    for(let i = 0; i < myNodeList.length; i++){
        let price =  myNodeList[i].querySelector('.price').value;
        let amount =  myNodeList[i].querySelector('.amount').value;
        sum +=  parseFloat(price * amount);
    }
    result.innerHTML = " "+ sum.toFixed(2);
});

// table №2

const edite_table = document.querySelector(".edite_table");
const templ = document.querySelector(".template .line_new");
const new_result = document.querySelector('.total_new'); 
const add_btn = document.querySelector(".add");
let maxField = 10;
let y = 1;

edite_table.addEventListener('input', function(e) {
    if(!(e.target.classList.contains("amount") || e.target.classList.contains("price"))) {
        return;
    }
    calculateTotal();
});

add_btn.addEventListener('click', function() {
    if(y < maxField){ 
        y++;
        let copy = templ.cloneNode(true);
        edite_table.appendChild(copy);
    }
});

edite_table.addEventListener('click', function(e) {
    console.dir(e.target);
    if(!e.target.classList.contains("remove")){
        return;
    }
    if(y != 1){ 
        edite_table.removeChild(e.target.closest('tr'));
        y--;
    }else{
        alert("You remove all")
    }

    calculateTotal();
});

function calculateTotal() {
    const edite_table_rows = document.querySelectorAll(".edite_table .line_new");

    let sum = 0;

    for (let i = 0; i < edite_table_rows.length; i++) {
        let price = edite_table_rows[i].querySelector('.price').value;
        let amount = edite_table_rows[i].querySelector('.amount').value;
        sum += parseFloat(price * amount);
    }

    new_result.innerHTML = "" + sum.toFixed(2);
}
