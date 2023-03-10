let cityArr = [];
let data;
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
    data = await $.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=079a3aaf7cde90e18d39bd4285644528`
    );
    console.log(data);
  } catch (error) {
    alert("error");
  }
  CreatingCard(data);
  FillingCard(data);
});
/*===============================================*/

function CreatingCard(data) {
  if (cityArr.includes(data.name)) {
    alert("there is such a city");
    $("#cityName").val("");
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
      .prependTo("#cities")
      .find(".header")
      .html(data.name + '<i class="fa-solid fa-plus"></i>');
  }
  $("#cities .element:first").find(".header").trigger("click");
  cityArr.push(data.name);

  console.log(cityArr);
  $("#cityName").val("");
}

function FillingCard(data) {
  $("#data").children()[0].innerText=`Temperature: ${data.main.temp} K`;
  $("#data").children()[1].innerText=`Temperature: ${(data.main.temp - 273).toFixed(1)} C`;
  $("#data").children()[2].innerText=`Pressure: ${data.main.pressure} hPa`;
  $("#data").children()[3].innerText=`Wind speed: ${data.wind.speed} meter/sec`;
  
  
}
