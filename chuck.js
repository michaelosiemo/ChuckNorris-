function randomFact() {
      // code for calling the Web Service by use of AJAX
      var xmlhttp = new XMLHttpRequest();
      var url = "https://api.chucknorris.io/jokes/random";
      xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          var json = JSON.parse(this.responseText);
          // Then parse the JSON response
          parseJson(json);
        }
      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    }

    function parseJson(json) {
      var fact = "<b>" + json["value"] + "</b>";
      document.getElementById("data").innerHTML = fact;
    }

    // Here a click event listener is added on the logo of Chuck Norris
    // This will load a new random fact when the user will click on it
    document.getElementById("logo").addEventListener("click", function() {
      randomFact();
    });

    randomFact();