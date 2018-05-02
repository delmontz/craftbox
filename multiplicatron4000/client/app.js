const add = require('./multiply.js');

class ViewManager{
    connectEventHandlers(){
        //テストコード
        let singleSelectNum = document.getElementsByClassName('input-num');

        document.getElementById('form-numbers')
            .addEventListener('submit',this.onSubmit.bind(this));
    }

    onSubmit(event){
        event.preventDefault();
        /*
        
        let num1 = document.getElementById('input-num1').value;
        let num2 = document.getElementById('input-num2').value;
        num1 = parseInt(num1,10);
        num2 = parseInt(num2,10);
        
        const sum = multiply(num1, num2);
        */
       let singleSelectNum = document.getElementsByClassName('input-num');


        this.renderSum(sum);
    }

    renderSum(sum){
        document.querySelector('.ans').textContent = sum;
    }

}

const mg = new ViewManager();
mg.connectEventHandlers();