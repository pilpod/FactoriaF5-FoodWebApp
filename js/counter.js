
export class Counter {

    constructor(minus, plus, count)
    {
        this.minus = minus;
        this.plus = plus;
        this.count = count;
    }

    GetCurrentNumber()
    {
        let currentNumber = this.count.textContent;
        currentNumber = Number(currentNumber);
        return currentNumber;
    }

    IncreaseCount()
    {

        this.plus.addEventListener('click', () => {
            let currentNumber = this.GetCurrentNumber();

            currentNumber++;
            let newNumber = currentNumber;
            this.count.innerHTML = newNumber;
        });
    }

    DecreaseCount() {

        this.minus.addEventListener('click', () => {
            let currentNumber = this.GetCurrentNumber();
            
            if(currentNumber > 0) {
                currentNumber--;
                let newNumber = currentNumber;
                this.count.innerHTML = newNumber;
            }
        });

    }

}

