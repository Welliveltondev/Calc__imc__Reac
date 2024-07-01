import { useState } from "react";
import styles from './Form.module.css';

const Form  = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const saberImc = () => {
        const divisao = peso / altura;
        switch (divisao) {
            case '<16':
                return  (
                    <p>Magreza grave</p>
                )
                break;
            case '>=16 <=16.9':
                return  (
                    <p>Magreza moderada</p>
                )
                break;
            case '>=17 <=18':
                return  (
                    <p>Magreza leve</p>
                )
                break;
            case '30 a 34.9':
                return  (
                        <p>obesidade garu um</p>
                    )
                    break;
            case '35 a 39.9':
                    return  (
                        <p>Obesidade severa</p>
                    )
                    break;
            case '>=40':
                    return  (
                        <p>Obesidade mórbida</p>
                    )
                    break;
            default:
                break;
        }
        
    }

    return (
        <div class="container">
        <h3>Vamos fazer a sua medida agora?</h3>
            <form>
                <input type="number" placeholder="Peso" min="0"onChange={evento => setPeso(parseInt(evento.target.value))}/>
                <span>X</span>
                <input type="number" placeholder="Altura" min="0" onChange={evento => setAltura(parseInt(evento.target.value))} />
            </form>
            <div className="result">
            <span></span>
            </div>
            {saberImc()}
        </div>
    )
}

export default Form