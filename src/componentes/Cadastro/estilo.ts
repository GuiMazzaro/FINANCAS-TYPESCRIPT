import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

interface tipoIcone{
    tipo: "up" | "down" 
}

export const Conteiner = styled.View`
    flex: 1;
    background-color: lightgray;
`

export const Cabecalho = styled.View`
    width: 100%;
    height: 10%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextoCabecalho = styled.Text`
    color: white;
    font-size: 18px;
`

export const Corpo = styled.View`
    width: 100%;
    height: 90%;
    //background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Formulario = styled.View`
    width: 85%;
    height: 80%;
    //background-color: yellow;
`

export const Campo = styled.TextInput`
    width: 100%;
    padding: 15px;
    background-color: white;
    margin-bottom: 10px; 
    border-radius: 3px;
`

export const ConteinerBotoes = styled.View`
    width: 100%;
    height: auto;
    //background-color: orange;
    display: flex;
    flex-direction:  row;
    justify-content: space-between;
`

export const BotaoPositivo = styled.TouchableOpacity`
    width: 48%;
    background-color: lightgray;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 3px;
    flex-direction: row;
`

export const BotaoNegativo = styled.TouchableOpacity`
    width: 48%;
    background-color: lightgray;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 3px;
    flex-direction: row;
`

export const TextoBotao = styled.Text`
    color: black;
    font-size: 14px;
    font-weight: bold;
`

export const Icone = styled(Icon)<tipoIcone>`
    font-size: 14px; 
    margin-right: 10px;

    ${({ tipo }) => tipo === 'up' && css`
     color: green;
     `}

    ${({ tipo }) => tipo === 'down' && css`
        color: red;
        `}

 `

export const BotaoEnviar = styled.TouchableOpacity`
    width: 85%;
    height: 8%;
    margin-top: 5%;
    background-color: #6a040f;
    border-radius: 6px;
    justify-content: center;
    align-items:center;
`

export const TextoBotaoEnviar = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: bold;
`