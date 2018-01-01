import React from 'react';
import ReactDom from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app');
const holaMundo = <h1>hola</h1>
ReactDom.render(<Playlist data={data} />, app);

console.log("que onda");
