var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: []
};

pike.calcHourlyCookies = function(){
  for(i = 0; i < hours.length; i++){
    var pikeCust = Math.floor(Math.random() * (pike.maxCust - pike.minCust + 1)) + pike.minCust;
    var hourlyCookies = Math.floor(pikeCust * pike.avgCookies);
    pike.hourlySales.push(hourlyCookies);
  }
};

pike.displayList = function(){
  var total = 0;
  var pikeList = document.getElementById('FirstAndPike');
  for(i = 0; i < hours.length; i++){
    var hourly = document.createElement('li');
    hourly.textContent = hours[i] + ': ' + pike.hourlySales[i];
    pikeList.appendChild(hourly);
    console.log(total += pike.hourlySales[i]);
  }
  var totalCookies = document.createElement('li');
  totalCookies.textContent = 'Total: ' + total;
  pikeList.appendChild(totalCookies);
};

pike.calcHourlyCookies();
pike.displayList();

var seaTac = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: []
};

seaTac.calcHourlyCookies = function(){
  for(i = 0; i < hours.length; i++){
    var seaTacCust = Math.floor(Math.random() * (seaTac.maxCust - seaTac.minCust + 1)) + seaTac.minCust;
    var hourlyCookies = Math.floor(seaTacCust * seaTac.avgCookies);
    seaTac.hourlySales.push(hourlyCookies);
    console.log(seaTac.hourlySales);
  }
};

seaTac.displayList = function(){
  var total = 0;
  var seaTacList = document.getElementById('SeattleTacoma');
  for(i = 0; i < hours.length; i++){
    var hourly = document.createElement('li');
    console.log(seaTac.hourlySales);
    hourly.textContent = hours[i] + ': ' + seaTac.hourlySales[i];
    seaTacList.appendChild(hourly);
    console.log(total += seaTac.hourlySales[i]);
  }
  var totalCookies = document.createElement('li');
  totalCookies.textContent = 'Total: ' + total;
  seaTacList.appendChild(totalCookies);
};

seaTac.calcHourlyCookies();
seaTac.displayList();

var seaCent = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: []
};

seaCent.calcHourlyCookies = function(){
  for(i = 0; i < hours.length; i++){
    var seaCentCust = Math.floor(Math.random() * (seaCent.maxCust - seaCent.minCust + 1)) + seaCent.minCust;
    var hourlyCookies = Math.floor(seaCentCust * seaCent.avgCookies);
    seaCent.hourlySales.push(hourlyCookies);
    console.log(seaCent.hourlySales);
  }
};

seaCent.displayList = function(){
  var total = 0;
  var seaCentList = document.getElementById('SeattleCenter');
  for(i = 0; i < hours.length; i++){
    var hourly = document.createElement('li');
    console.log(seaCent.hourlySales);
    hourly.textContent = hours[i] + ': ' + seaCent.hourlySales[i];
    seaCentList.appendChild(hourly);
    console.log(total += seaCent.hourlySales[i]);
  }
  var totalCookies = document.createElement('li');
  totalCookies.textContent = 'Total: ' + total;
  seaCentList.appendChild(totalCookies);
};

seaCent.calcHourlyCookies();
seaCent.displayList();

var capHill = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: []
};

capHill.calcHourlyCookies = function(){
  for(i = 0; i < hours.length; i++){
    var capHillCust = Math.floor(Math.random() * (capHill.maxCust - capHill.minCust + 1)) + capHill.minCust;
    var hourlyCookies = Math.floor(capHillCust * capHill.avgCookies);
    capHill.hourlySales.push(hourlyCookies);
  }
};

capHill.displayList = function(){
  var total = 0;
  var capHillList = document.getElementById('CapitolHill');
  for(i = 0; i < hours.length; i++){
    var hourly = document.createElement('li');
    hourly.textContent = hours[i] + ': ' + capHill.hourlySales[i];
    capHillList.appendChild(hourly);
    console.log(total += capHill.hourlySales[i]);
  }
  var totalCookies = document.createElement('li');
  totalCookies.textContent = 'Total: ' + total;
  capHillList.appendChild(totalCookies);
};

capHill.calcHourlyCookies();
capHill.displayList();

var alki = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: []
};

alki.calcHourlyCookies = function(){
  for(i = 0; i < hours.length; i++){
    var alkiCust = Math.floor(Math.random() * (alki.maxCust - alki.minCust + 1)) + alki.minCust;
    var hourlyCookies = Math.floor(alkiCust * alki.avgCookies);
    alki.hourlySales.push(hourlyCookies);
  }
};

alki.displayList = function(){
  var total = 0;
  var alkiList = document.getElementById('AlkiBeach');
  for(i = 0; i < hours.length; i++){
    var hourly = document.createElement('li');
    hourly.textContent = hours[i] + ': ' + alki.hourlySales[i];
    alkiList.appendChild(hourly);
    console.log(total += alki.hourlySales[i]);
  }
  var totalCookies = document.createElement('li');
  totalCookies.textContent = 'Total: ' + total;
  alkiList.appendChild(totalCookies);
};

alki.calcHourlyCookies();
alki.displayList();
