//const add = require('./multiply.js');

class ViewManager{
    connectEventHandlers(){
        /* test code */
        console.log(document.getElementById('cal_button'));
        /* end test */

        document.getElementById('cal_button')
            .addEventListener('submit', this.onCal.bind(this), false);
        document.getElementById('add_button')
            .addEventListener('submit', this.onAdd.bind(this), false);
    }

    onCal(event){
        event.preventDefault();
        let allNumObj = document.querySelectorAll('.num-tag');
        let forAnsVar = 1;
        for(let tmpNum of allNumObj){
            forAnsVar *= parseInt(tmpNum.value, 10);
        }

        this.renderSum(forAnsVar);
    }

    onAdd(){
        event.preventDefault();
        let allNumLabel = document.getElementById('num-label');
        let clone = allNumLabel.firstElementChild.cloneNode(true);
        allNumLabel.appendChild(clone);
    }

    renderSum(sum){
        document.getElementById('ans').textContent = sum;
    }
}

const mg = new ViewManager();
mg.connectEventHandlers();
