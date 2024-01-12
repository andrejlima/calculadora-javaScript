function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
    };

    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (conta === isNaN || conta === Infinity) {
                alert('conta inálida!');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('conta inálida!');
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const el = event.target; //captura click e salva na variável el
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            };
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };
    this.btnParaDisplay = valor => this.display.value += valor;
}

const calculadora = new Calculadora();
calculadora.inicia();