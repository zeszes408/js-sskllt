// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let apiEndpoint = "https://api.transport.nsw.gov.au/v1/tp/";
let apiCall = "departure_mon";
let when = new Date();
let time = when.getHours();
let timeStr = "";
timeStr = when.getHours();
timeStr += String(when.getMinutes());
let stop = "10101331";
//var APIKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ6Z1hKWkVBa1o5dDk3c2FVd0FBS2pZXzVKUG9feW9SOVU3a0J5dHFiVHBFIiwiaWF0IjoxNjkyOTE2MDYxfQ.JJ6LdZ0z4divLEUayZm2eMq6vn_2MGkRwiwrCaR9wU4"

//https://api.transport.nsw.gov.au/v1/tp/departure_mon?outputFormat=rapidJSON&coordOutputFormat=EPSG%3A4326&mode=direct&type_dm=stop&name_dm=10101331&itdTime=1200&departureMonitorMacro=true&TfNSWDM=true&version=10.2.1.42

let params = "";
params += apiEndpoint;
params += apiCall;
params += "?outputFormat=rapidJSON&coordOutputFormat=EPSGEPSG%3A4326&mode=direct&type_dm=stop&name_dm=";
params += stop;
params += timeStr;
params += "&departureMonitorMacro=true&TfNSWDM=true&version=10.2.1.42";

fetch(params, {
  method: "GET",
  headers: {"Authorization" :"apikey eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ6Z1hKWkVBa1o5dDk3c2FVd0FBS2pZXzVKUG9feW9SOVU3a0J5dHFiVHBFIiwiaWF0IjoxNjkyOTE2MDYxfQ.JJ6LdZ0z4divLEUayZm2eMq6vn_2MGkRwiwrCaR9wU4"
  }
})
.then(response => response.json())
.then(json => console.log(JSON.stringify(json)))


