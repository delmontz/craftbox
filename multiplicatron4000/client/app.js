//const add = require('./multiply.js');

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
            forAnsVar *= parseInt(tmpNum.value, 10);
        }

        this.renderSum(forAnsVar);
    }

    renderSum(sum){
        document.getElementById('ans').textContent = sum;
    }
}

const mg = new ViewManager();
mg.connectEventHandlers();
