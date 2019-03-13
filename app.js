'use strict';

function randomGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

var firstAndPike = {
    name_of_store: 'First and Pike',
    min_customers: 23,
    max_customers: 65,
    avg_cookies_purchased: 6.3,
    arrayOne: []
}

firstAndPike.cookies_per_hour = function () {
    for(var i = 0; i < 14; i++) {
        var randomCustomers = randomGenerator(this.min_customers, this.max_customers);
        var cookieSales = randomCustomers * firstAndPike.avg_cookies_purchased;
        var noDecimals = Math.floor(cookieSales);
        firstAndPike.arrayOne.push(noDecimals);
    }
}

firstAndPike.renderSales = function () {
    var parent = document.getElementById('stores');

    var unordered_list = document.createElement('ul');
    unordered_list.textContent = this.name_of_store;
    parent.appendChild(unordered_list);


    for(var i = 0; i < 14; i++) {
    var list_element = document.createElement('li');
    list_element.textContent = `${i+6}:00 = ${this.arrayOne[i]} cookies`;  //I followed along in code-review and used the idea that was presented on the whiteboard to help fix my code, so this may look similar in some parts to the review that we did in class 7
    unordered_list.appendChild(list_element);  
    }  
    
    firstAndPike.sumFinder = function() {
        var totalSum = 0
        
    for (var i = 0; i < firstAndPike.arrayOne.length; i++) {
        totalSum += firstAndPike.arrayOne[i]
    }
        console.log(totalSum);
        
        var sum = document.getElementById('stores');
        var list_element = document.createElement('ul');
        list_element.textContent = totalSum + ' Total Cookies!';
        unordered_list.appendChild(list_element);
    }
}


// Get the parent
// Make a new Element
// Give it content
// append it to the page (parent.appendChild(child);)

// console.log(randomGenerator(23, 65));

// console.log(document.getElementById('pike'))

var seaTacAirport = {
    name_of_store: 'SeaTac Airport',
    min_customers: 3,
    max_customers: 24,
    avg_cookies_purchased: 1.2,
    arrayTwo: []
}

seaTacAirport.cookies_per_hour = function () {
    for(var i = 0; i < 14; i++) {
        var randomCustomers = randomGenerator(this.min_customers, this.max_customers);
        var cookieSales = randomCustomers * seaTacAirport.avg_cookies_purchased;
        var noDecimals = Math.floor(cookieSales);
        seaTacAirport.arrayTwo.push(noDecimals);
    }
}

seaTacAirport.renderSales = function () {
    var parent = document.getElementById('stores');//section

    var unordered_list = document.createElement('ul'); //ul
    unordered_list.textContent = this.name_of_store;
    parent.appendChild(unordered_list);


    for(var i = 0; i < 14; i++) {
        var list_element = document.createElement('li');
    list_element.textContent = `${i+6}:00 = ${this.arrayTwo[i]} cookies`;
    unordered_list.appendChild(list_element); //li attached to ul
    }
    seaTacAirport.sumFinder = function() {
        var totalSum = 0
        
    for (var i = 0; i < seaTacAirport.arrayTwo.length; i++) {
        totalSum += seaTacAirport.arrayTwo[i]
    }
        console.log(totalSum);
        
        var sum = document.getElementById('stores');
        var list_element = document.createElement('ul');
        list_element.textContent = totalSum + ' Total Cookies!';
        unordered_list.appendChild(list_element);
    }

    }

// }

var seattleCenter = {
    name_of_store: 'Seattle Center',
    min_customers: 11,
    max_customers: 38,
    avg_cookies_purchased: 3.7,
    arrayThree: []
}

seattleCenter.cookies_per_hour = function () {
    for(var i = 0; i < 14; i++) {
        var randomCustomers = randomGenerator(this.min_customers, this.max_customers);
        var cookieSales = randomCustomers * seattleCenter.avg_cookies_purchased;
        var noDecimals = Math.floor(cookieSales);
        seattleCenter.arrayThree.push(noDecimals);
    }
}

seattleCenter.renderSales = function () {
    var parent = document.getElementById('stores');

    var unordered_list = document.createElement('ul');
    unordered_list.textContent = this.name_of_store;
    parent.appendChild(unordered_list);


    for(var i = 0; i < 14; i++) {
    var list_element = document.createElement('li');
    list_element.textContent = `${i+6}:00 = ${this.arrayThree[i]} cookies`;
    unordered_list.appendChild(list_element);

    seattleCenter.sumFinder = function() {
        var totalSum = 0
        
    for (var i = 0; i < seattleCenter.arrayThree.length; i++) {
        totalSum += seattleCenter.arrayThree[i]
    }
        console.log(totalSum);
        
        var sum = document.getElementById('stores');
        var list_element = document.createElement('ul');
        list_element.textContent = totalSum + ' Total Cookies!';
        unordered_list.appendChild(list_element);
    }

    }

}

var capitolHill = {
    name_of_store: 'Capitol Hill',
    min_customers: 20,
    max_customers: 38,
    avg_cookies_purchased: 2.3,
    arrayFour: []
}

capitolHill.cookies_per_hour = function () {
    for(var i = 0; i < 14; i++) {
        var randomCustomers = randomGenerator(this.min_customers, this.max_customers);
        var cookieSales = randomCustomers * capitolHill.avg_cookies_purchased;
        var noDecimals = Math.floor(cookieSales);
        capitolHill.arrayFour.push(noDecimals);
    }
}

capitolHill.renderSales = function () {
    var parent = document.getElementById('stores');

    var unordered_list = document.createElement('ul');
    unordered_list.textContent = this.name_of_store;
    parent.appendChild(unordered_list);

    
    for(var i = 0; i < 14; i++) {
    var list_element = document.createElement('li');
    list_element.textContent = `${i+6}:00 = ${this.arrayFour[i]} cookies`;
    unordered_list.appendChild(list_element);

    capitolHill.sumFinder = function() {
        var totalSum = 0
        
    for (var i = 0; i < capitolHill.arrayFour.length; i++) {
        totalSum += capitolHill.arrayFour[i]
    }
        console.log(totalSum);
        
        var sum = document.getElementById('stores');
        var list_element = document.createElement('ul');
        list_element.textContent = totalSum + ' Total Cookies!';
        unordered_list.appendChild(list_element);
    }

    }

}

var alki = {
    name_of_store: 'Alki',
    min_customers: 2,
    max_customers: 16,
    avg_cookies_purchased: 4.6,
    arrayFive: []
}

alki.cookies_per_hour = function () {
    for(var i = 0; i < 14; i++) {
        var randomCustomers = randomGenerator(this.min_customers, this.max_customers);
        var cookieSales = randomCustomers * alki.avg_cookies_purchased;
        var noDecimals = Math.floor(cookieSales);
        alki.arrayFive.push(noDecimals);
    }
}

alki.renderSales = function () {
    var parent = document.getElementById('stores');

    var unordered_list = document.createElement('ul');
    unordered_list.textContent = this.name_of_store;
    parent.appendChild(unordered_list);


    for(var i = 0; i < 14; i++) {
    var list_element = document.createElement('li');
    list_element.textContent = `${i+6}:00 = ${this.arrayFive[i]} cookies`;
    unordered_list.appendChild(list_element);

    alki.sumFinder = function() {
        var totalSum = 0
        
    for (var i = 0; i < alki.arrayFive.length; i++) {
        totalSum += alki.arrayFive[i]
    }
        console.log(totalSum);
        
        var sum = document.getElementById('stores');
        var list_element = document.createElement('ul');
        list_element.textContent = totalSum + ' Total Cookies!';
        unordered_list.appendChild(list_element);
    }

    }

}

firstAndPike.cookies_per_hour();
firstAndPike.renderSales();
firstAndPike.sumFinder();
seaTacAirport.cookies_per_hour();
seaTacAirport.renderSales();
seaTacAirport.sumFinder();
seattleCenter.cookies_per_hour();
seattleCenter.renderSales();
seattleCenter.sumFinder();
capitolHill.cookies_per_hour();
capitolHill.renderSales();
capitolHill.sumFinder();
alki.cookies_per_hour();
alki.renderSales();
alki.sumFinder();
console.log(firstAndPike);
console.log(seaTacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);
