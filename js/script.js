import { MyCard } from "./my-card.js";
customElements.define("my-card", MyCard);
let cityArr = [];
/*===============================================*/

$("#cities .header").click(function () {
  console.log($(this).text());
  $("#cities .discription").not($(this).next()).slideUp();
  $("#cities .header")
    .not(this)
    .find("i")
    .removeClass("fa-minus")
    .addClass("fa-plus");
  $(this).nextUntil(".header").slideToggle();

  $(this).find("i").toggleClass("fa-minus").toggleClass("fa-plus");
});
/*===============================================*/

$("#citySearch").submit(async function (event) {
  event.preventDefault();
  let cityName = $("#cityName").val();

  try {
    let data = await $.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=079a3aaf7cde90e18d39bd4285644528`
    );
    console.log(data);
    outputWeather(data);
  } catch (error) {
    alert("error");
  }
});
/*===============================================*/

function outputWeather(data) {
  if (cityArr.includes(data.name)) {
    alert("there is such a city");
    return;
  }
  if (!cityArr.length) {
    $("#cities .element:first")
      .find(".header")
      .html(data.name + '<i class="fa-solid fa-plus"></i>');
    $("#cities").removeClass("none");    
  } else {
    $("#cities .element:first")
      .clone(true, true)
      .appendTo("#cities")
      .find(".header")
      .html(data.name + '<i class="fa-solid fa-plus"></i>');    
  }
  cityArr.push(data.name);
  console.log(cityArr);
  $("#cityName").text("");
}
