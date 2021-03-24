var ip = document.getElementById("ip");
var button = document.getElementById("go");

button.addEventListener("click", searchIp);
const API_KEY = "at_wGIUTvQdnN4lpS6grmPARPK9RvRjz";

var dataVal = {};


function setDefault(){
 
  fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=8.8.8.8
`)
    .then(function (res) {
      console.log(res);
      return res.text();
    })
    .then((data) =>
      createElements(
        JSON.parse(data).ip,
        JSON.parse(data).location,
        JSON.parse(data).isp,
      )
    );
}
setDefault();
 
function searchIp(e) {
  e.preventDefault();
  var val = ip.value;
  console.log(val);

 if(val!==""){
    fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${val}
`)
      .then(function (res) {
        console.log(res);
        return res.text();
      })
      .then((data) =>
        createElements(
          JSON.parse(data).ip,
          JSON.parse(data).location,
          JSON.parse(data).isp
        )
      );
 }
 else{
   setDefault();
 }

    val = "";
}


function createElements(ip, location, isp){
    console.log(ip);
    console.log(location.city);
    console.log(location.timezone);
    console.log(location.lat);
    console.log(location.lng)
    console.log(isp);

    appendText('ipAdd',ip);
    appendText("location", location.city);
    appendText("timezone", location.timezone);
    appendText("isp", isp);
}

function appendText(element, text){
  document.getElementById(element).innerHTML = "";
  var textContent = document.createTextNode(text);
  var paragraph = document.getElementById(element);

  paragraph.appendChild(textContent);

}

function createMap(){
  
}