import sampleTemplate from './templates/sample-template.html?raw';
import './style.scss';
import { init } from './init.js';

document.body.innerHTML = `${sampleTemplate}`;
init();
