import x from './x.js';
import y from './y';
import './z.styl';
import png from './assets/1.png';

const div = document.getElementById("app");


// div.innerHTML = `
//     <img src = ${png}>
// `;

const button = document.createElement('button');
button.innerText = '懒加载';
button.onclick = ()=>{
    const promise = import('./lazy');
    //import函数调用文件，赋值给promise
    promise.then((module)=>{
        module.default();
    },()=>{
        console.error('模块加载错误');
    });
};

div.appendChild(button);