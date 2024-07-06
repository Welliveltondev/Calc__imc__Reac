// import { useState } from 'react';
import styles from './Imc.module.css';

const Imc = () => {

    return (
        <div>
            <header className={styles.header}>
            <h1>IMC</h1>
            </header>
            <div class="description">
                <h3>Você sabe o que é?</h3>
                <p>Índice de Massa Corporal, é uma das principais ferramentas, adotada inclusive pela Organização Mundial de Saúde "OMS", para calcular o chamado “peso ideal”. 
                    Obtido a partir do peso e da altura do indivíduo, o IMC também aponta níveis de magreza e obesidade, que são usados para nortear o trabalho de profissionais de saúde e de educadores físicos.</p>
                <p>
                    Para obter o IMC, basta dividir o seu peso "em quilos" pela altura "em metros" elevada ao quadrado "altura x altura".
                    De acordo com o indicador, o peso considerado saudável é aquele situado entre 18,5 e 24,9.
                </p>
            </div>

            <div>
            <h3>Os outros marcadores do IMC são</h3>
        <ul>
            <li>
                magreza leve entre "17 e 18";
            </li>
            <li>
                magreza moderada entre 16 e 16,9;
            </li>
            <li>
                magreza grave menor que 16;
            </li>
            <li>
                obesidade grau 1 "30 a 34,9";
            </li>
            <li>
                obesidade severa "35  a 39,9";
            </li>
            <li>
                obesidade mórbida "acima de 40";
            </li>
        </ul>
        </div>
        </div>
    )
    
}

export default Imc;
