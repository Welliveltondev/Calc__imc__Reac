import { useState, useEffect, useCallback } from "react";
import styles from './Form.module.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState("");

    const calcularImc = useCallback(() => {
        if (peso > 0 && altura > 0) {
            const alturaMetros = altura / 100;
            const imc = peso / (alturaMetros * alturaMetros);
            const categoria = "";

            if (imc < 16) {
                categoria = "magreza grave";
            } else if (imc >=16 && imc <= 16.9) {
                categoria = "magreza moderada";
            } else if (imc >= 17 && imc <= 18.4) {
                categoria = "magreza leve";
            } else if (imc >= 18.5 && imc <= 24.9) {
                categoria = "peso normal";
            } else if (imc >= 25 && imc <= 29.9) {
                categoria = "sobrepeso";
            } else if (imc >= 30 && imc <= 34.9) {
                categoria = "obesidade grau um";
            } else if (imc >= 35 && imc <= 39.9) {
                categoria = "obesidade grave"
            } else if (imc >= 40) {
                categoria = "obesidade morbida";
            } else {
                categoria = "valores invalidos";
            }

            const imcFormatado = imc.toFixed(2);

            setResultado(`${imcFormatado} - ${categoria}`)
        } else {
            setResultado("Por favor, insira um valor válido para peso e altura");
        }
    }, [peso, altura]);

    useEffect(() => {
        calcularImc();
    }, [peso, altura, calcularImc]);

    return (
        <div className={styles.container} >
            <h3>Vamos medir o seu agora ?</h3>
            <form>
                <input className={styles.input} type="number" placeholder="Peso(kg)" min="0" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                <span>/</span>
                <input type="number" placeholder="Altura(cm)" min="0" step="0.01" onChange={evento => setAltura(parseFloat(evento.target.value))} />
            </form>
            <div>
                <p>{resultado}</p>
            </div>
        </div>
    );
}

export default Formulario