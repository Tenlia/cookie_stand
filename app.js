var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlyCust: [],
  hourlySales: []
};

firstAndPike.pikeCust = function(){
  return Math.floor(Math.random() * (firstAndPike.maxCust - firstAndPike.minCust + 1)) + firstAndPike.minCust;
};

firstAndPike.pikeCookie = function(){
  return(firstAndPike.pikeCust * firstAndPike.avgCookies);
  firstAndPike.hourlySales.push(firstAndPike.pikeCookie);
};


firstAndPike.hourCookies = function {
  var pike = document.getElementById('pike');
  for(i = 0; i < firstAndPike.hours.length; i++){
