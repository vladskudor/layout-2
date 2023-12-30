import ANSWER from '../module';
import './style.scss';
import logo from './assets/logo.jpg';
import logo1 from './assets/logo1.jpg';
import logo2 from './assets/logo2.jpg';
import logo3 from './assets/logo3.jpg';

import sec1 from './assets/sec1.jpg';
import sec3 from './assets/sec3.jpg';
import sec6 from './assets/sec6.jpg';

console.log('Universe answer' , ANSWER);

let burger = document.getElementsByClassName('burger');
let nav = document.getElementsByTagName('nav');
burger[0].addEventListener('click' , () => {
    nav[0].classList.toggle('nav-action');
})