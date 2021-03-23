"use strict";

var ip = document.getElementById("ip");
var button = document.getElementById("go");
button.addEventListener("click", searchIp);
var API_KEY = "at_wGIUTvQdnN4lpS6grmPARPK9RvRjz";
var dataVal = {};

function searchIp() {
  var val = ip.value;
  fetch("https://geo.ipify.org/api/v1?apiKey=".concat(API_KEY, "&ipAddress=8.8.8.8\n")).then(function (res) {
    console.log(res);
    return res.text();
  }).then(function (data) {
    return createElements(JSON.parse(data).ip, JSON.parse(data).location, JSON.parse(data).isp);
  });
}

function createElements(ip, location, isp) {
  console.log(ip);
  console.log(location.city);
  console.log(location.timezone);
  console.log(location.lat);
  console.log(location.lng);
  console.log(isp);
}
