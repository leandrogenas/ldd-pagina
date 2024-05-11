import $ from 'jquery';


let $txt = $('header>.ldd');

$txt.css({ 'visibility': 'visible' });
$txt.css({ 'width': parseInt(($txt.width() + 50)).toString() + "px" });

let str = $txt
  .text();

$txt
  .empty();

let i = 0;
let strParcial = "";
let intervalo = setInterval(() => {
  if(i >= str.length - 1) {
    clearInterval(intervalo);
    let m = false;
    setInterval(() => {
      $txt
        .html(`${str}<span>${(!m) ? "_" : ""}<span>`);
      m = !m;
    }, 1000)
  }

  strParcial += str[i++];
  $txt.text(strParcial);
}, 100);