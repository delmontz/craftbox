const add = require('./multiply.js');

class ViewManager{
    connectEventHandlers(){
        /* test code */
        console.log(document.getElementById('cal_button'));
        /* end test */

        document.getElementById('cal_button')
            .addEventListener('submit',this.onCal.bind(this));
        document.getElementById('add_button')
            .addEventListener('submit',this.onAdd.bind(this));
    }

    onCal(event){
        event.preventDefault();
        /*
        
        let num1 = document.getElementById('input-num1').value;
        let num2 = document.getElementById('input-num2').value;
        num1 = parseInt(num1,10);
        num2 = parseInt(num2,10);
        
        const sum = multiply(num1, num2);
        */
        let allNumObj = document.querySelectorAll('.num-tag');
        let forAnsVar = 1;
        for(let tmpNum in allNumObj){
            forAnsVar *= parseInt(tmpNum.value,10);
        }

        this.renderSum(forAnsVar);
    }

    renderSum(sum){
        document.getElementById('ans').textContent = sum;
    }

    onAdd(){
        event.preventDefault();    

    }

}

const mg = new ViewManager();
mg.connectEventHandlers();