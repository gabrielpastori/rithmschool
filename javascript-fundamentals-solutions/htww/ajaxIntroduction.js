//Using the XHR object, make a request to https://omdbapi.com and choose a title to search by using the query string and key of t.
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      console.log(JSON.parse(XHR.responseText))
    }
};
XHR.open("GET", "https://omdbapi.com?apikey=keyhere&t=t");
XHR.send();

//Using the fetch API, make a request to https://omdbapi.com and choose a title to search by using the query string and key of t.
fetch('https://omdbapi.com?apikey=keyhere&t=t').then(function(response){
    return response.json().then(function(data){
        console.log(data);
    });
});