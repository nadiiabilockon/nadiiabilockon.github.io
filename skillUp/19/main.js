var items = document.querySelector('.input-g');
var maxField = 10;
var y = 1;
console.dir(items);

add.addEventListener('click', function() {
    if(y < maxField){ 
        y++;
        var copy = items.children[0].cloneNode(true);
        items.appendChild(copy);
    }
});

items.addEventListener('click', function(e) {
    if(!e.target.classList.contains("remove")){
        return;
    }
    if(y != 1){ 
        items.removeChild(e.target.parentElement.parentElement);
        y--;
    }else{
        alert("You remove all")
    }   
});

var inp_form = document.querySelector('.inp_form');
var x = 1; 
console.dir(inp_form);


inp_form_add.addEventListener('click', function() {
    if(x < maxField){ 
        x++;
        var copy = inp_form.children[0].cloneNode(true);
        inp_form.appendChild(copy);
    }     
});  

    inp_form_rem.addEventListener('click', function() {
        if(x != 1){ 
        var last = inp_form.lastElementChild;
        inp_form.removeChild(last);
        x--;
        }else{
            alert("You remove all")
        }
});

var drop = document.querySelector('#dropdownMenu2');
var dropdown_menu = document.querySelector(".dropdown-menu");

drop.addEventListener('click', function(e) {
    e.preventDefault();
        if(!dropdown_menu.classList.contains('active')) {
           dropdown_menu.classList.add('active');  
        }
        else{
            dropdown_menu.classList.remove('active');
        }
});
    
