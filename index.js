function calcular(){
	let lim = [document.getElementById('lim'), document.getElementById('lim1'), document.getElementById('lim2')];
	let said = document.getElementById('said');
	let li = [Number(lim[0].value), Number(lim[1].value), Number(lim[2].value)];
	
	if (li[1] == 0 || li[1] == "" || li[2] == 0 || li[2] == ""){
		if (li[0] == 0 || li[0] == ""){
			window.alert('Please, type a number!');
			said.innerHTML = '';
		}else{
			lim[1].value = '';
			lim[2].value = '';
			let num1 = Math.floor(Math.random() * li[0]);
			let num2 = Math.floor(Math.random() * li[0]);
			let modi = definirm();
			Number(num1.value);
			Number(num2.value);
			Number(modi.value);
			said.innerHTML = '';
			said.innerHTML += `<p>${num1} ${modi} ${num2}</p>`;
		}
	}else{
			lim[0].value = '';
			let num1 = Math.floor(Math.random() * li[1]);
			let num2 = Math.floor(Math.random() * li[2]);
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