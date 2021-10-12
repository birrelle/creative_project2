

document.getElementById("holidaySubmit").addEventListener("click", async function (event) {
    event.preventDefault();
    
    await getHolidays();
  
  });
  
  
  
  
  async function getHolidays() {
    const date = document.getElementById("date").value.split('-');
    const year = date[0];
    const month = date[1];
    const day = date[2];
    if (year === "" || month === "" || day === "")
        return;
    console.log(year);
    console.log(month);
    console.log(day);

    const country = document.getElementById("country").value;
    if (country === "")
        return;
    console.log(country);
  
  
    const url = "https://holidays.abstractapi.com/v1/?api_key=80742d34ffb54da487cebd9741c0d4bc&country=" + country + "&year=" + year + "&month=" + month + "&day=" + day;
    await fetch(url)
        .then(function (response) {
            return response.json();
        }).then(async function (json) {

            let holiday = "";
            holiday += "<div id=container>"; 

            if(json.length == 0) {
                holiday += "<div id=small_container>No holiday on specified date and place</div>"
            }

            for(var i =0; i < json.length; i++) {
                holiday += "<div id=small_container>";
                holiday += "<div id=name>" + json[i].name + "</div>";
                holiday += "<div id=type>Type: " + json[i].type + "</div>";
                holiday += "<div id=weekday>Weekday: " + json[i].week_day + "</div>"
                holiday += "</div>";

            }
            holiday += "</div>"
            document.getElementById("holidayResults").innerHTML = holiday;
        });
    
  }
 