//dynamically create each page
//starting from the top left of the gallery each page has a number 0,1,2,3,4,5....
//This numbers are then used to dynamically generate the page...meaning that the arrays must all match
//title array 0 must correspond with body array 0, and the images as well.

//arrays for populating page
fetch('https://mc-gamedeveloper.github.io/portfolio/data/PortfolioContentJSON.json')
  .then(response => response.json())
  .then(jsonData => 
  {
      console.log(jsonData);
      // Use the JSON data as needed

        //name of this page
        var thisPage = window.name

        if(thisPage == ""){
          console.log(thisPage);
          thisPage = 0;
        }

        //text data for this page
        var workTitle = document.getElementById("work-text-title");
        var workBody = document.getElementById("work-text-body");
        //image data for this page
        var workImageLocation = document.getElementById("the-images");
        var workImages =[];
        //documentation image hosting location **** https://imgur.com/a/12rlQWx ****
        //documentation gif hosting location **** https://giphy.com/channel/mtc9417 ****

        //other work data
        var otherWorks = document.getElementsByClassName("other-work");
        var color = ["#165f99", "#f5cb62", "#cc6155"];

        //title and body text
        // workTitle.innerHTML = titles[thisPage];
        // workBody.innerHTML = body[thisPage];
        console.log(jsonData[thisPage].Title);
        workTitle.innerHTML = jsonData[thisPage].Title;
        workBody.innerHTML = jsonData[thisPage].Body;


        //images for each page
        for(var i = 0; i<jsonData[thisPage].Images.length;i++){
          workImages[i]=document.createElement('img');
          workImages[i].src = jsonData[thisPage].Images[i];
          workImageLocation.appendChild(workImages[i]);
          workImageLocation.innerHTML += "<br><br>";
          // workImageLocation.appendChild("<br>");
        }
        //dynamic links for other works
        for(var i = 0; i<jsonData.length;i++){
          if(i!=thisPage){
            otherWorks[i].innerHTML = jsonData[i].Title + " / ";

            (function(index) {
              otherWorks[index].addEventListener("mousedown", function() {
                  loadWorkPage(index);
                })
                otherWorks[index].addEventListener("mouseover", function(event) {
                  event.target.style.cursor = "pointer";
                  event.target.style.color = color[index % 3];
                })
                otherWorks[index].addEventListener("mouseleave", function(event) {

                  event.target.style.color = "white";
                })
            })(i);
          }
        }
  });

//gallery links to work pages
var piecesOfWork = document.getElementsByClassName("work-link");

for (var i = 0; i < piecesOfWork.length; i++) {
  (function(index) {
      piecesOfWork[index].addEventListener("mousedown", function() {
          loadWorkPage(index);
        })
        piecesOfWork[index].addEventListener("mouseover", function(event) {
          event.target.style.cursor = "pointer";
        })
        piecesOfWork[index].addEventListener("mouseleave", function(event) {

        })
  })(i);
}


//The new Page
function loadWorkPage(index){
  //console.log(index);
  window.name = index;
  window.location.href =  "work.html";
}

