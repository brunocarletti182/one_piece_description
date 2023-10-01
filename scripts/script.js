const buttons = document.querySelectorAll(".button");
const chars = document.querySelectorAll(".char");

buttons.forEach((button, indice) => {
	button.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPersonagem();

		button.classList.add("selected");
		chars[indice].classList.add("selected");
	});
});

function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".char.selected");
	personagemSelecionado.classList.remove("selected");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".button.selected");
	botaoSelecionado.classList.remove("selected");
}


