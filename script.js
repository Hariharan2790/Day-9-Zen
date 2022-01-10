/*Get all the countries from Asia continent /region using Filter function
 */

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send();

request.onload = function () {
    var data = JSON.parse(request.response);
    var res = data.filter((ele) => ele.continent)
    console.log(res.map((ele) => ele.region=="Asia"));
    //console.log(data);

}



// // // /*Get all the countries with a population of less than 2 lakhs using Filter function
// // //  */

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    var res = data.filter((ele) => ele.population < 200000)
    console.log(res);
    // console.log(data);

}


// // /**Print the following details name, capital, flag using forEach function
// //  */

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    var res = data.filter((ele) => ele.capital)
    console.log(res.map((ele) => ele.name));
    console.log(res.map((ele) => ele.flag));


}

// /*Print the total population of countries using reduce function
//  */


var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);

    var res = data.reduce((acc, element) => {
        return acc + element.population;
    }, 0)
    console.log(element.population);


}

// // /*Print the country which uses US Dollars as currency. */

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    console.log(data)
    for (var i = 0; i < data.length; i++) {
       if (data[i].currencies[0].code == "USD") {
           console.log("name:", data[i].name, "==>", data[i].currencies[0])
           
        }
    }
}
