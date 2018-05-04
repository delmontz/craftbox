(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const add = require('./multiply.js');

class ViewManager{
    connectEventHandlers(){
        /* test code */
        console.log(document.getElementById('cal_button'));
        /* end test */

        document.getElementById('form-numbers')
            .addEventListener('submit', this.onSubmit.bind(this), false);
    }

    onSubmit(event){
        /* test code */
        console.log(event.target.id);
        /* test end */

        event.preventDefault();
        let allNumObj = document.querySelectorAll('.num-tag');
        let forAnsVar = 1;
        for(let tmpNum of allNumObj){
            forAnsVar *= parseInt(tmpNum.value,10);
        }

        this.renderSum(forAnsVar);
    }

    renderSum(sum){
        document.getElementById('ans').textContent = sum;
    }
}

const mg = new ViewManager();
mg.connectEventHandlers();
},{"./multiply.js":2}],2:[function(require,module,exports){
const multiply = (num1, num2) => {
    return num1 * num2;
};
module.exports = multiply;

},{}]},{},[1]);
