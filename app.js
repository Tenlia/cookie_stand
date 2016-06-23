'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalDaySales = 0;
var stands = [];
var idArray = [];
var cookieTable = document.getElementById('cookieTable');

//changed the symbols to properly work with function
function CookieStand(locationName, minCust, maxCust, avgCookies, address, phoneNum) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.address = address;
  this.phoneNum = phoneNum;
  this.hourlyCust = [];
  this.hourlyCookieSales = [];
  this.totalCartSales = 0;
  stands.push(this);
};

//we have to make an object for each cart
var pike = new CookieStand('First and Pike', 23, 65, 6.3, 'addressFirstAndPike', '206-xxx-xxxx');
var seaTac = new CookieStand('SeaTac Airport', 3, 24, 1.2, 'addressSeaTac', '206-2xx-xxxx');
var seaCent = new CookieStand('Seattle Center', 11, 38, 3.7, 'addressSeaCent', '206-3xx-xxxx');
var capHill = new CookieStand('Capitol Hill', 20, 38, 2.3, 'addressCapHill', '206-4xx-xxxx');
var alki = new CookieStand('Alki', 2, 16, 4.6, 'addressAlki', '206-5xx-xxxx');

CookieStand.prototype.calcHourlyCust = function() {
  for(var i = 0; i < hours.length; i++){
    this.hourlyCust[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};
CookieStand.prototype.calcHourlyCookies = function() {
  this.calcHourlyCust(); //separated it out so that it was easier to read and I could call it
  for(var i = 0; i < hours.length; i++){
    this.hourlyCookieSales[i] = Math.floor(this.hourlyCust[i] * this.avgCookies);
    this.totalCartSales += this.hourlyCookieSales[i];
    hourlyTotals[i] += this.hourlyCookieSales[i];
  }
  totalDaySales += this.totalCartSales;
};

function makeHeaderCells() {
  var trEl = document.createElement('tr');//make table row
  trEl.id = 'headCells';
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

function makeTotalsCells() {
  var trEl = document.createElement('tr');
  trEl.id = 'totalCells';
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = totalDaySales;
  trEl.appendChild(tdEl);
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotals[i];
    trEl.appendChild(tdEl);
  }
  cookieTable.appendChild(trEl);
};

CookieStand.prototype.cookieStandTableCells = function() {
  this.calcHourlyCookies();
  idArray.push(this.locationName);
  var trEl = document.createElement('tr'); //make the row
  var tdEl = document.createElement('td'); //make the cell
  tdEl.textContent = this.locationName; //find the data (name)
  trEl.appendChild(tdEl); //add the cell to the row
  var tdEl = document.createElement('td'); //make another cell
  tdEl.textContent = this.totalCartSales;
  trEl.appendChild(tdEl);
  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookieSales[i];
    trEl.appendChild(tdEl);
  }
  cookieTable.appendChild(trEl);
};

// function rowChecker() {
//   for(var i = 0; i < idArray.length; i++){
//     if(this.locationName === idArray[i]){
//       document.getElementById(idArray[i]).remove();
//       idArray.push(this.locationName);
//       idArray.pop();
//     //otherwise, just add it on and move the totals down
//     }else{
//       idArray.push(this.locationName);
//     }
// };

// render the header and table cells with content
var render = function() {
  makeHeaderCells(); //adds the header row
  for(var i = 0; i < stands.length; i++) {
    stands[i].cookieStandTableCells();
  }
  makeTotalsCells(); //adds the totals row
};

render();

// Grab form in html
var cookieForm = document.getElementById('cookie_form');

// event handler
function handleCookieForm(event) {
  event.preventDefault();

// pulling data from form into handler
  var locationName = document.getElementById('location_name');
  var minCust = document.getElementById('min_cust');
  var maxCust = document.getElementById('max_cust');
  var avgCookies = document.getElementById('avg_cookies');
  var address = document.getElementById('add_address');
  var phoneNum = document.getElementById('phone_num');

// creating new cookie stand object
  var newCookieStand = new CookieStand(locationName.value, minCust.value, maxCust.value, avgCookies.value, address.value, phoneNum.value);

//create new cookie stand's row
  newCookieStand.cookieStandTableCells();

// reset fields to be blank after creating new row
  event.target.location_name.value = null;
  event.target.min_cust.value = null;
  event.target.max_cust.value = null;
  event.target.avg_cookies.value = null;
  event.target.add_address.value = null;
  event.target.phone_num.value = null;

// alert to confirm successful submission
  alert('you\'ve added ' + newCookieStand.locationName + ' to the table!');
};

// listening for click and handling click with handler above
cookieForm.addEventListener('submit', handleCookieForm, false);
