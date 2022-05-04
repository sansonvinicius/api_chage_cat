//endereço da API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


//Função para buscar os dados da API
const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
        //utiliza o webpurl para pegar e retornar a imagem da API
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

//Função para carregar a imagem do gato na página
const loadImg = async () => {
	const catImg = document.getElementById('cat');
	catImg.src = await getCats();
};

loadImg();

//listener no botão para mudar a imagem sempre que for clicado
const catBtn = document.getElementById('change-cat');
catBtn.addEventListener('click', loadImg);