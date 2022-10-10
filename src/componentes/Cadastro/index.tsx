import React from "react";
import {Conteiner, Cabecalho, TextoCabecalho, Corpo, Campo, Formulario, ConteinerBotoes, BotaoPositivo, BotaoNegativo, TextoBotao, Icone, BotaoEnviar, TextoBotaoEnviar} from './estilo'

function Cadastro(){

    return(

        <Conteiner>

            <Cabecalho>
                <TextoCabecalho>Cadastro</TextoCabecalho>
            </Cabecalho>

            <Corpo>

                <Formulario> 

                    <Campo placeholder="Nome:"/>

                    <Campo placeholder="Preço:"/>

                    <ConteinerBotoes>

                        <BotaoPositivo>
                            <Icone name={"arrow-circle-up"} tipo={"up"}/>
                            <TextoBotao>Income</TextoBotao>
                        </BotaoPositivo>

                        <BotaoNegativo>
                            <Icone name={"arrow-circle-down"} tipo={"down"}/>
                            <TextoBotao>Outcome</TextoBotao>
                        </BotaoNegativo>

                    </ConteinerBotoes>

                </Formulario>
                
                <BotaoEnviar>

                    <TextoBotaoEnviar>Enviar</TextoBotaoEnviar>

                </BotaoEnviar>

            </Corpo>

        </Conteiner>

    );


}

export default Cadastro;