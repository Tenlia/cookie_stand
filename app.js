var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: []
};

firstAndPike.calcHourlyCookies = function(){
  for(i = 0; i < hours.length; i++){
    var pikeCust = Math.floor(Math.random() * (firstAndPike.maxCust - firstAndPike.minCust + 1)) + firstAndPike.minCust;
    var hourlyCookies = Math.floor(pikeCust * firstAndPike.avgCookies);
    firstAndPike.hourlySales.push(hourlyCookies);
  }
};

firstAndPike.displayList = function(){
  var total = 0;
  var pike = document.getElementById('pike');
  for(i = 0; i < hours.length; i++){
    var hourly = document.createElement('li');
    hourly.textContent = hours[i] + ': ' + firstAndPike.hourlySales[i];
    pike.appendChild(hourly);
    console.log(total += firstAndPike.hourlySales[i]);
  }
  var totalCookies = document.createElement('li');
  totalCookies.textContent = 'Total: ' + total;
  pike.appendChild(totalCookies);
};

firstAndPike.calcHourlyCookies();
firstAndPike.displayList();
