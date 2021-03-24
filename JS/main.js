"use strict";

var ip = document.getElementById("ip");
var button = document.getElementById("go");
button.addEventListener("click", searchIp);
var API_KEY = "at_wGIUTvQdnN4lpS6grmPARPK9RvRjz";
var dataVal = {};

function setDefault() {
  fetch("https://geo.ipify.org/api/v1?apiKey=".concat(API_KEY, "&ipAddress=8.8.8.8\n")).then(function (res) {
    console.log(res);
    return res.text();
  }).then(function (data) {
    return createElements(JSON.parse(data).ip, JSON.parse(data).location, JSON.parse(data).isp);
  });
}

setDefault();

function searchIp(e) {
  e.preventDefault();
  var val = ip.value;
  console.log(val);

  if (val !== "") {
    fetch("https://geo.ipify.org/api/v1?apiKey=".concat(API_KEY, "&ipAddress=").concat(val, "\n")).then(function (res) {
      console.log(res);
      return res.text();
    }).then(function (data) {
      return createElements(JSON.parse(data).ip, JSON.parse(data).location, JSON.parse(data).isp);
    });
  } else {
    setDefault();
  }

  val = "";
}

function createElements(ip, location, isp) {
  console.log(ip);
  console.log(location.city);
  console.log(location.timezone);
  console.log(location.lat);
  console.log(location.lng);
  console.log(isp);
  appendText("ipAdd", ip);
  appendText("location", location.city);
  appendText("timezone", location.timezone);
  appendText("isp", isp);
  mapboxgl.accessToken = "pk.eyJ1IjoiZGlnYW50YTE1IiwiYSI6ImNrbW5zMGJnODA4enIycXJ2YjQ5ZDJsb2sifQ.vsrA5_Bb4ibb-Lw0-0sSvw";
  var map = new mapboxgl.Map({
    container: "leaflet",
    // container ID
    style: "mapbox://styles/mapbox/streets-v11",
    // style URL
    center: [location.lng, location.lat],
    // starting position [lng, lat]
    zoom: 10 // starting zoom

  });
}

function appendText(element, text) {
  document.getElementById(element).innerHTML = "";
  var textContent = document.createTextNode(text);
  var paragraph = document.getElementById(element);
  paragraph.appendChild(textContent);
}
