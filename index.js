function calcular(){
	let lim = document.getElementById('lim');
	let said = document.getElementById('said');
	let li = Number(lim.value);
	
	if (li == 0 || li == ""){
		window.alert('Please, type a number!');
		said.innerHTML = '';
	}else{
		let num1 = Math.floor(Math.random() * li);
		let num2 = Math.floor(Math.random() * li);
		let modi = definirm();
		Number(num1.value);
		Number(num2.value);
		Number(modi.value);
		said.innerHTML = '';
		said.innerHTML += `<p>${num1} ${modi} ${num2}</p>`;
	}
}

function definirm(){
	let vale = Math.floor(Math.random() * 4);
	Number(vale.value);
	if (vale == 0){
		return "+";
	}else if (vale == 1){
		return "-";
	}else if (vale == 2){
		return "*";
	}else if (vale == 3){
		return "/";
	}
}