(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const add = (num1, num2) => {
    return num1 +  num2;
};
module.exports = add;

},{}],2:[function(require,module,exports){
const add = require('./adder.js');
console.log(add(5,6));

class ViewManager{
    connectEventHandlers(){
        document.getElementById('form-numbers')
            .addEventListener('submit',this.onSubmit);
    }

    onSubmit(event){
        event.preventDefault();
        let num1 = document.getElementById('input-num1').value;
        let num2 = document.getElementById('input-num2').value;
        num1 = parseInt(num1,10);
        num2 = parseInt(num2,10);
        let ans = add(num1,num2);
        alert(ans);
    }
}

const mg = new ViewManager();
mg.connectEventHandlers();
},{"./adder.js":1}]},{},[2]);
