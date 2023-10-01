const buttons = document.querySelectorAll(".button");
const chars = document.querySelectorAll(".char");

buttons.forEach((button, indice) => {
	button.addEventListener("click", () => {
		unselectButton();
		unselectChar();

		button.classList.add("selected");
		chars[indice].classList.add("selected");
	});
});

function unselectChar() {
	const personagemSelecionado = document.querySelector(".char.selected");
	personagemSelecionado.classList.remove("selected");
}

function unselectButton() {
	const botaoSelecionado = document.querySelector(".button.selected");
	botaoSelecionado.classList.remove("selected");
}


