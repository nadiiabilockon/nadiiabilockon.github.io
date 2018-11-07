const head_table = document.querySelector("#title");
const collapse = document.querySelector("#collapse");
const add_btn = document.querySelector("#add_btn");
const tfoot = document.querySelector("tfoot");
const sort = document.querySelector('.sort_btn');
let sum = 0;

function Widget() {

	this.addRow = function addRow() {

		const table_main = document.querySelector("#table_main");
		const copy = document.querySelector(".line_new").cloneNode(true);
		const name_value = copy.querySelector(".name_value");
		const amount_value = copy.querySelector(".amount_value");
		const name = document.querySelector('.name').value;
		const price = document.querySelector('.amount').value;
		const inputType = document.querySelectorAll("tfoot input");
		const total = document.querySelector('.total_price');
		const error = document.querySelector("#error");

		if (price && name) {
			name_value.innerHTML = name;
			amount_value.innerHTML = "$" + " " + price;

			sum += parseFloat(price);
			total.innerHTML = "$" + " " + sum;
			table_main.appendChild(copy);

			for (let i = 0; i < inputType.length; i++) {
				inputType[i].value = '';
			}
		} else {
			error.innerHTML = "You must fill in all of the fields."
		}

	};

	this.sortTable = function sortTable() {
		var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
		table = document.getElementById("table_main");
		switching = true;
		dir = "asc";
		while (switching) {
			switching = false;
			rows = table.rows;
			for (i = 0; i < (rows.length - 1); i++) {
				shouldSwitch = false;
				x = rows[i].getElementsByTagName("TD")[0];
				y = rows[i + 1].getElementsByTagName("TD")[0];
				if (dir == "asc") {
					if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
						shouldSwitch = true;
						break;
					}
				} else if (dir == "desc") {
					if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
						shouldSwitch = true;
						break;
					}
				}
			}
			if (shouldSwitch) {
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
				switchcount++;
			} else {
				if (switchcount == 0 && dir == "asc") {
					dir = "desc";
					switching = true;
				}
			}
		}
	};
	this.expander = function expander(e) {
		if (e.target.classList.contains("fas")) {
			collapse.classList.toggle('active');
			document.querySelector(".fas").classList.toggle('fa-caret-square-down');
			document.querySelector(".fas").classList.toggle('fa-caret-square-up');
		}
	};
}

function keyIsAvalible() {
	if (event.keyCode < 46 || event.keyCode == 47 || event.keyCode > 57)
		event.returnValue = false;
}

const myWidget = new Widget();

head_table.addEventListener('click', myWidget.expander);

add_btn.addEventListener('click', myWidget.addRow);

tfoot.addEventListener("keydown", function(e) {
	if (e.keyCode == 13) {
		myWidget.addRow();
	}
});
sort.addEventListener('click', myWidget.sortTable);