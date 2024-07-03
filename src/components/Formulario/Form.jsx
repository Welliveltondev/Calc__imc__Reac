import { useState } from "react";
import styles from './Form.module.css';

// const Form  = () => {
//     const [peso, setPeso] = useState(0);
//     const [altura, setAltura] = useState(0);

//     const saberImc = () => {
//         const resultado = peso / altura

//         if (resultado.value >= 18) {
//             return (
//                 <p>Voce está bem</p>
//             )
//         } else {
//             return (
//                 <p>Você não está bem</p>
//             )
//         }

//     //     switch (divisao) {
//     //         case '<=15':
//     //             return  (
//     //                 <p>Magreza grave</p>
//     //             )
//     //         case '>=16 <=16.9':
//     //             return  (
//     //                 <p>Magreza moderada</p>
//     //             )
//     //         case '>=17 <=18':
//     //             return  (
//     //                 <p>Magreza leve</p>
//     //             )
//     //         case '>=30 <= 34.9':
//     //             return  (
//     //                     <p>obesidade garu um</p>
//     //                 )
//     //         case '>=35 <= 39.9':
//     //                 return  (
//     //                     <p>Obesidade severa</p>
//     //                 )
//     //         case '>=40':
//     //                 return  (
//     //                     <p>Obesidade mórbida</p>
//     //                 )
//     //         default: null
//     //     }
//     }

//     console.log(resultado)
//     return (
//         <div className={styles.container}>
//         <h3>Vamos fazer a sua medida agora?</h3>
//             <form>
//                 <input type="number" placeholder="Peso" min="0"onChange={evento => setPeso(parseInt(evento.target.value))}/>
//                 <span>X</span>
//                 <input type="number" placeholder="Altura" min="0" onChange={evento => setAltura(parseInt(evento.target.value))} />
//             </form>
//             <div>
//             {saberImc()}
//             </div>
//         </div>
//     )
// }

// export default Form

import { useState, useEffect, useCallback } from "react";
import styles from './Form.module.css';

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
                categoria = "Magreza grave";
            } else if (imc >= 16 && imc <= 16.9) {
                categoria = "Magreza moderada";
                
            } else if (imc >= 17 && imc <= 18.4) {
                categoria = "Magreza leve";
                
            } else if (imc >= 18,5 && imc <= 24,9) {
                categoria = "Peso normal";
                
            } else if (imc >= 25 && imc <= 29.9) {
                categoria = "Sobrepeso";
                
            } else if (imc >= 30 && imc <= 34.9) {
                categoria = "Obesidade grau um";
                
            } else if (imc >= 35 && imc <= 39.9) {
                categoria = "Obesidade grave";
                
            } else if (imc >= 40) {
                categoria = "Obesidade mórbida";
                
            } else {
                categoria = "Valores inválidos";
            }

            const imcFormatado = imc.toFixed(2);

            setResultado(`IMC: ${imcFormatado} - ${categoria}`);
        } else {
            setResultado("Por favor, insira valores válidos para peso e altura.");
        }
    }, [peso, altura]);

    useEffect(() => {
        calcularImc();
    }, [peso, altura, calcularImc]); 

    return (
        <div  className={styles.container}>
            <h3>Vamos fazer a sua medida agora?</h3>
            <form>
                <input
                    type="number"
                    placeholder="Peso (kg)"
                    min="0"
                    onChange={evento => setPeso(parseFloat(evento.target.value))}
                />
                <span>X</span>
                <input
                    type="number"
                    placeholder="Altura (cm)"
                    min="0"
                    step="0.01" 
                    onChange={evento => setAltura(parseFloat(evento.target.value))}
                />
            </form>
            <div className={estilos.result}>
                <p>{resultado}</p>
            </div>
        </div>
    );
}

export default Formulario;