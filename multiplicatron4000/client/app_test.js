const add = require('./test.js');

class TestSuite {
    runTest(){
        this.testAddNegativeNumbers();
        this.testAddPositiveNumbers();
        this.testAddPositiveAndNegativeNumbers();
    }

    runTests(){
        Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(prop => this[prop] instanceof Function)
            .filter(prop => prop.indexOf('test') !== -1)
            .forEach(testName => this.runTest(testName));
        }

    assertEquals(a,b){
        return a === b;
    }

    testAddPositiveNumbers(){
        const result = this.assertEquals(add(5, 7), 12);
        console.log(result, 'testAddPositiveNumbers');
    }

    testAddNegativeNumbers(){
        const result = this.assertEquals(add(-5, -7), 12);
        console.log(result, 'testAddNegativeNumbers');
    }

    testAddPositiveAndNegativeNumbers(){
        const result = this.assertEquals(add(5, -7), -2);
        console.log(result, 'testAddPositiveAndNegativeNumbers');
    }

}

const testSuite = new TestSuite();
testSuite.runTests();