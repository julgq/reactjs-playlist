import React from 'react';
import ReactDom from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
const holaMundo = <h1>hola</h1>
ReactDom.render(<Media title="Titulo" type="video" />, app);

console.log("que onda");
