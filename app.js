'use strict';

function randomGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var globalArray = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
// global-scope array that stores 14 datapoints inside itself.  perfect for using .length in forloops and also will be used in data table header

var hourlyTotal = [];
// another globalArray that is used to store the amount of cookies sold by each store during a specific hour, so that all those cookies can be totaled and an hourly total can be produced

function Business (name, min, max, avg_cookies) {
  this.name = name;
  this.min_customers = min;
  this.max_customers = max;
  this.avg_cookies_purchased = avg_cookies;
  this.cookieArray = [];
}


var hourlyTotalSales = function () {
  for(var a = 0; a < globalArray.length; a++) {
    var arraySumHolder = 0;
    for(var i = 0; i < locationsArray.length; i++) {
      arraySumHolder = arraySumHolder + locationsArray[i].cookieArray[a];
    }
    hourlyTotal.push(arraySumHolder);
  }
  return arraySumHolder;
};


Business.prototype.randCustomers = function () {
  var randomAmountCustomers = randomGenerator(this.min_customers, this.max_customers);
  return randomAmountCustomers;
};

Business.prototype.avgCookiesSold = function () {
  var x = this.randCustomers();
  var rat = Math.floor(x * this.avg_cookies_purchased);
  return rat;
};


Business.prototype.arrayFiller = function () {
  for(var i = 0; i < globalArray.length; i++){
    var cookiesSold = this.avgCookiesSold();
    this.cookieArray.push(cookiesSold);
  }
};

Business.prototype.totalCookies = function () {
  var totalSum = 0;
  for(var i = 0; i < globalArray.length; i++) {
    totalSum = totalSum + this.cookieArray[i];
  }
  return totalSum;
};

function ultimateTotal() {
  var finalTotal = 0;
  for(var a = 0; a < locationsArray.length; a++){
    finalTotal = finalTotal + locationsArray[a].totalCookies();
  }
  return finalTotal;
}


var tableElement = document.getElementById('nums-table');

// testing

function buildHeader() {
  var header_tr = document.createElement('tr');
  var blank = document.createElement('td');
  header_tr.appendChild(blank);
  for(var i = 0; i < globalArray.length; i++){
    var headerTwo_td = document.createElement('td');
    headerTwo_td.textContent = globalArray[i];
    header_tr.appendChild(headerTwo_td);
  }
  var total_td = document.createElement('td');
  total_td.textContent = 'Daily Total';
  header_tr.appendChild(total_td);
  tableElement.appendChild(header_tr);
}

// testing ^



Business.prototype.tableDataFiller = function(next_tr, title_cell, totalCookies){
  var title_td = document.createElement('td');
  title_td.textContent = title_cell;
  next_tr.appendChild(title_td);
  for(var i = 0; i < globalArray.length; i++) {
    var dataInCell = document.createElement('td');
    dataInCell.textContent = this.cookieArray[i];
    next_tr.appendChild(dataInCell);
  }
  var totalSumCookies = document.createElement('td');
  totalSumCookies.textContent = totalCookies;
  next_tr.appendChild(totalSumCookies);
};

Business.prototype.rowCreator = function () {
  var title_cell = this.name;
  var totalSumCookies = this.totalCookies();
  var next_tr = document.createElement('tr');
  this.tableDataFiller(next_tr, title_cell, totalSumCookies);
  tableElement.appendChild(next_tr);
};



function buildFooter() {
  var footer_tr = document.createElement('tr');
  var footer_td = document.createElement('td');
  footer_td.textContent = 'Totals';
  footer_tr.appendChild(footer_td);
  for(var i = 0; i < globalArray.length; i++) {
    var footerTwo_td = document.createElement('td');
    footerTwo_td.textContent = hourlyTotal[i];
    footer_tr.appendChild(footerTwo_td);
  }
  var dailyTotal_td = document.createElement('td');
  dailyTotal_td.textContent = ultimateTotal();
  footer_tr.appendChild(dailyTotal_td);
  tableElement.appendChild(footer_tr);
}


var locationsArray = [
  new Business('1st and Pike', 23, 65, 6.3),
  new Business('SeaTac Airport', 3, 24, 1.2),
  new Business('Seattle Center', 11, 38, 3.7),
  new Business('Capitol Hill', 20, 38, 2.3),
  new Business('Alki', 2, 16, 4.6)
];


function tableBuilder(){
  buildHeader();
  for(var i = 0; i < locationsArray.length; i++) {
    locationsArray[i].arrayFiller();
    locationsArray[i].rowCreator();
  }
  hourlyTotalSales();
  buildFooter();
}






var newLocationAdder = document.getElementById('locationAdder');
function buildNewLocation(event){
  event.preventDefault();

  var location = event.target.storeName.value;
  var cusMin = event.target.minimumCustomers.value;
  var cusMax = event.target.maximumCustomers.value;
  var avg = event.target.avgCookiesPerCustomer.value;

  var newLocation = new Business(location, cusMin, cusMax, avg);

  locationsArray.push(newLocation);
  tableElement.innerHTML= '';
  newLocation.arrayFiller();
  tableBuilder();
}
tableBuilder();
newLocationAdder.addEventListener('submit', buildNewLocation);

