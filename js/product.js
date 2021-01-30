
export class Product {

    constructor(column1, column2, column3)
    {
        this.column1 = column1;
        this.column2 = column2;
        this.column3 = column3;
    }

    ShowAllProducts()
    {
        this.GetData()
            .then(data => {

                console.log(data)
                console.log(data.products[0].breakfast[0])

                let product = data.products[0].breakfast[0];

                // Print in second column
                this.column2.innerHTML = `
                <div class="box-product">
                    <img src="${product.img}" alt="">
                    <div class="info-product">
                        <i class="fas fa-euro-sign euro"></i><span id="price">${product.price}</span>
                        <h5 id="dish_name">${product.name}</h5>
                        <h6 id="ingredients">${product.ingredients}</h6>
                        <div id="counter">
                            <div id="minus"><i class="fas fa-minus"></i></div>
                            <div id="count">0</div>
                            <div id="plus"><i class="fas fa-plus"></i></div>
                        </div>
                    </div>
                </div>
                `;

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    async GetData()
    {
        let result = await fetch('../products.json')
                        .then(result => result.json());
        return result;
    }

}