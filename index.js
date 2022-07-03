function calcular(){
	let limg = document.getElementById('lim'); // Limite geral.
	let lim1 = document.getElementById('lim1'); // Limite específico 1.
	let lim2 = document.getElementById('lim2'); // Limite específico 2.
	let cuant = document.getElementById('nofa'); // Quantidade de contas a gerar.
	Number(cuant.value);
	Number(limg.value);
	Number(lim1.value);
	Number(lim2.value);
	verifilo();
	
	function verifilo(){
		if (verifiel() == true){
			if (lim1.value == 0 || lim1.value == "" || lim2.value == 0 || lim2.value == ""){
				window.alert('[ERROR] We need data!');
			}else{ // Caiu opções específicas.
				gerar(false);
			}
		}else{ // Caiu opções gerais.
			gerar(true);
		}
		
		function gerar(a){ // Gerar/Exibir os dados.
			if (a == true){ // Tratar os dados de forma geral.
				lim1.value = '';
				lim2.value = '';
				said.innerHTML = '';
				if (cuant.value == 0){ // Se a quantidade de contas for igual a 0, considere 1.
					cuant.value++;
				}
				for(c=1;c<=cuant.value;c++){
					let num1 = Math.floor(Math.random() * limg.value);
					let num2 = Math.floor(Math.random() * limg.value);
					let modi = definirm();
					Number(num1.value);
					Number(num2.value);
					Number(modi.value);
					said.innerHTML += `<p>${num1} ${modi} ${num2}</p>`;
				}
			}else{ // Tratar os dados de forma específica.
				lim.value = '';
				said.innerHTML = '';
				if (cuant.value == 0){ // Se a quantidade de contas for igual a 0, considere 1.
					cuant.value++;
				}
				for(c=1;c<=cuant.value;c++){
					let num1 = Math.floor(Math.random() * lim1.value);
					let num2 = Math.floor(Math.random() * lim2.value);
					let modi = definirm();
					Number(num1.value);
					Number(num2.value);
					Number(modi.value);
					said.innerHTML += `<p>${num1} ${modi} ${num2}</p>`;
				}
			}
		}
	}
	
	function verifiel(){ // Verificar o tipo de tratamento dos dados.
		if (limg.value == 0 || limg.value == ""){
			return true;
		}else{
			return false;
		}
	}
	
	function definirm(){ // Definir o modificador (o tipo de conta).
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
}