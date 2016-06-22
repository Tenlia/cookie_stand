'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var stands = [];
var cookieTable = document.getElementById('cookieTable');

//changed the symbols to properly work with function
function CookieStand(locationName, minCust, maxCust, avgCookies) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyCust = [];
  this.hourlyCookieSales = [];
  this.totalSales = 0;
  stands.push(this);
};

//we have to make a data group for each cart
var pike = new CookieStand('First and Pike', 23, 65, 6.3);
var seaTac = new CookieStand('SeaTac Airport', 3, 24, 1.2);
var seaCent = new CookieStand('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand('Alki', 2, 16, 4.6);

CookieStand.prototype.calcHourlyCust = function() {
  for(var i = 0; i < hours.length; i++){
    this.hourlyCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};
CookieStand.prototype.calcHourlyCookies = function() {
  this.calcHourlyCust(); //separated it out so that it was easier to read and I could call it
  for(var i = 0; i < hours.length; i++){
    this.hourlyCookieSales[i] = Math.floor(this.hourlyCust[i] * this.avgCookies);
    this.totalSales += this.hourlyCookieSales[i];
  }
};

function makeHeaderCells() {
  var trEl = document.createElement('tr');//make table row
  var thEl = document.createElement('th');//first header
  thEl.textContent = ' ';//make blank
  trEl.appendChild(thEl);//add to row
  var thEl = document.createElement('th');//create
  thEl.textContent = 'Daily Location Total';//add data
  trEl.appendChild(thEl);//add to row
  for(var i = 0; i < hours.length; i++){//adding hours to the header
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  cookieTable.appendChild(trEl);//add row to table
};

CookieStand.prototype.cookieStandTableCells = function() {
  this.calcHourlyCookies();
  var trEl = document.createElement('tr'); //make the row
  var tdEl = document.createElement('td'); //make the cell
  tdEl.textContent = this.locationName; //find the data (name)
  trEl.appendChild(tdEl); //add the cell to the row
  var tdEl = document.createElement('td'); //make another cell
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookieSales[i];
    trEl.appendChild(tdEl);
  }
  cookieTable.appendChild(trEl);
};

var render = function() {
  makeHeaderCells();
  for(var i = 0; i < stands.length; i++) {
    stands[i].cookieStandTableCells();
  }
};

render();
