import { StatusBar } from 'react-native';
import Transacao from './src/componentes/Transacao';
import { Inicial } from './src/telas/Inicial';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Inicial/>
    </>
  );
}
