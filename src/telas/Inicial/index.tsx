import React from 'react'
import { Painel } from '../../componentes/Painel';
import { Transacao, TransacaoProps } from '../../componentes/Transacao'

import {Conteiner, 
    Cabecalho, 
    Paineis, 
    Transacoes,
    UsuarioConteiner,
    UsuarioInformacoes,
    Foto,
    Usuario,
    UsuarioMensagem,
    UsuarioNome,
    Icone,
} from './estilo'
import {} from './estilo'



export function Inicial(){

    const dados: TransacaoProps[] = [
        {
            id: '1',
            tipo: 'negativo',
            titulo: 'Camisa de Futebol',
            total: 'R$ 350,00',
            categoria: {
                nome: 'Esportes',
                icone: 'futbol'
            },
            data: '03/10/22' 
        },
        {
            id: '2',
            tipo: 'positivo',
            titulo: 'Vendas online',
            total: 'R$ 2.000,00',
            categoria: {
                nome: 'Vendas',
                icone: 'id-card'
            },
            data: '03/10/22' 
        },
        {
            id: '3',
            tipo: 'positivo',
            titulo: 'INSS',
            total: 'R$ 5.000,00',
            categoria: {
                nome: 'Recebimentos',
                icone: 'gem'
            },
            data: '03/10/22' 
        },
        {
            id: '4',
            tipo: 'negativo',
            titulo: 'Parcela do Carro',
            total: 'R$ 600,00',
            categoria: {
                nome: 'Carro',
                icone: 'car'
            },
            data: '03/10/22' 
        },
    ]


    return(
        <Conteiner>
            <Cabecalho>
                <UsuarioConteiner>
                    <UsuarioInformacoes>
                        <Foto
                            source={{uri:'https://avatars.githubusercontent.com/u/100737265?v=4'}}
                        />
                        <Usuario>
                            <UsuarioMensagem>Olá</UsuarioMensagem>
                            <UsuarioNome>Gui Mala 10</UsuarioNome>
                        </Usuario>
                        
                    </UsuarioInformacoes>
                    <Icone name="power-off"/>
                </UsuarioConteiner>

            </Cabecalho>
            <Paineis>
                <Painel
                    tipo="entrada"
                    titulo="Entrada"
                    total="R$ 17.400,00"
                    ultimaTransacao="Última entrada entrada dia 10 de setembro"
                />

                <Painel
                    tipo="saida"
                    titulo="Saída"
                    total="R$ 1.259,00"
                    ultimaTransacao="Última saída entrada dia 23 de setembro"
                />

                <Painel
                    tipo="total"
                    titulo="Total"
                    total="R$ 16.141,00"
                    ultimaTransacao="01 a 26 de setembro"
                />

            </Paineis>
            
            <Transacoes>
                data={dados}
                keyExtrator={ item => item.id}
                renderItem={({ item }) => <Transacao lancamento={item}/>}
            </Transacoes>

        </Conteiner>
    )
}