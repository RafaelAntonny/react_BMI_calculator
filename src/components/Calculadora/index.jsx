import { useState } from "react";
import './calculadora.css';

const Calculadora = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);

    const Imc = (peso && altura) ? (peso / (altura ** 2)) : 0;

    const classificacaoDoResultado = () => {
        switch (true) {
            case Imc < 18.5:
                return "Você está abaixo do peso";
            case Imc >= 18.5 && Imc <= 24.9:
                return "Você está com um peso saudável";
            case Imc >= 25 && Imc <= 29.9:
                return "Você está acima do peso";
            case Imc >= 30:
                return "Você está obeso(a)";
        }
    }

    return(
        <div className="calculator__container">
            <form>
                <input type="number" placeholder="Digite sua altura (em metros)" onChange={({ target }) => setAltura(parseFloat(target.value)) } />
                <input type="number" placeholder="Digite o seu peso (em kgs)" onChange={({ target }) => setPeso(parseFloat(target.value)) } />
            </form>
            <div className="result">
                <p>O seu IMC é: {Imc.toFixed(2)}</p>
                <p>{classificacaoDoResultado()}</p>
            </div>
        </div>
    )
}

export default Calculadora;
