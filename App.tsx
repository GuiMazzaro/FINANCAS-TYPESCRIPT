import { StatusBar } from 'react-native';
import Transacao from './src/componentes/Transacao';
import Cadastro from './src/componentes/Cadastro';
import { Inicial } from './src/telas/Inicial';
// import  Cadastro from '

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Cadastro/>
    </>
  );
}
