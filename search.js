function search() {
	let input = document.getElementById('searchbar').value
	input = input.toLowerCase();
	let x = document.getElementsByClassName('col-lg-4 mb-4');

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		}
		else {
			x[i].style.display = "list-item";
		}
	}
}