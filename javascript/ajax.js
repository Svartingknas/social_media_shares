"use strict"
window.onload = function(){


var jQueryPromise = $.ajax({
  dataType: "json",
  url: 'https://count.donreach.com/?url=http://9gag.com&format=json'
})

var realPromise = Promise.resolve(jQueryPromise);

realPromise.then(function (response){
console.log('gotData', response);
createTable(response);
}, function(err) {
console.log("err", err);
})
};
