import { Categories } from "./categories.js";
import { Counter } from "./counter.js";
import { Product } from "./product.js";

/* let categories = new Categories();
categories.MoveNavCategories(); */

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let count = document.getElementById('count');
let counter = new Counter(minus, plus, count);

counter.DecreaseCount();
counter.IncreaseCount();

let firstColumn = document.getElementById('first_column');
let secondColumn = document.getElementById('second_column');
let thirdColumn = document.getElementById('third_column');
let products = new Product(firstColumn, secondColumn, thirdColumn);

products.ShowAllProducts();
