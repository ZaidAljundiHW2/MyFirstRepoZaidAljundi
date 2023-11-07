var cityContainer = document.getElementById("city-info");
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://zaidaljundihw2.github.io/MyFirstRepoZaidAljundi/cities1.json');
    ourRequest.onload = function() {
    let data = JSON.parse(ourRequest.responseText);
    renderHTML(data);
    };
    ourRequest.send();

    function renderHTML(data) {

        var htmlString = "";
        for (let i=0; i<data.length; i++){
            htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + "<br> where you can enjoy places like: ";
            for (let x = 0; x < data[i].places.indoor.length; x++) {
                if (x == 0) {
                    htmlString += data[i].places.indoor[x];
                    } 
                else {
                    htmlString += ", and " + data[i].places.indoor[x];
                    }
                    
            }

            htmlString += ". & Enjoy places like: ";

            for (let x = 0; x < data[i].places.outdoor.length; x++) {
                if (x == 0) {
                    htmlString+= data[i].places.outdoor[x];
                }

                else {
                    htmlString += " and " + data[i].places.outdoor[x];
                }
            }

            htmlString += ".<p>";

        }
        cityContainer.insertAdjacentHTML('beforeend' , htmlString);
        btn.classList.add("hide-me");

    }
})
