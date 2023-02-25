//dynamically create each page
//starting from the top left of the gallery each page has a number 0,1,2,3,4,5....
//This numbers are then used to dynamically generate the page...meaning that the arrays must all match
//title array 0 must correspond with body array 0, and the images as well.

//arrays for populating page
fetch('/data/PortfolioContentJSON.json')
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

function populatePage(){
//   //name of this page
//   var thisPage = window.name
 
//   if(thisPage == ""){
//     console.log(thisPage);
//     thisPage = 0;
//   }

//   //text data for this page
//   var workTitle = document.getElementById("work-text-title");
//   var workBody = document.getElementById("work-text-body");
//   //image data for this page
//   var workImageLocation = document.getElementById("the-images");
//   var workImages =[];
//   //documentation image hosting location **** https://imgur.com/a/12rlQWx ****
//   //documentation gif hosting location **** https://giphy.com/channel/mtc9417 ****
//   var documentationImages=[
// ///////////////////////////////Run Boggo Run
//                             ["https://i.imgur.com/4eIHpuR.png", "https://i.imgur.com/OKLRZbm.png",
//                             "https://i.imgur.com/1p7FkKF.png", "https://i.imgur.com/FBdLy8S.png",
//                             "https://i.imgur.com/gJgnxy7.png","https://i.imgur.com/Y6ZHFy4.png" ],
// //////////////////////////////Errrational
//                             ["https://i.imgur.com/maV2QIE.gif", 
//                             "https://i.imgur.com/78YKZSA.gif", "https://i.imgur.com/t2E5sx9.gif", ],
// ////////////////////////////Alphabets Got Talent
//                             ["https://i.imgur.com/qgUoh6r.png", "https://i.imgur.com/13fGFBA.png", 
//                             "https://i.imgur.com/f8oLcQO.png", "https://i.imgur.com/6fghUD0.png"],
// ////////////////////////////Creative Math
//                             ["https://media2.giphy.com/media/UrVBjoqpqFQTB4tHlv/giphy.gif", "https://media0.giphy.com/media/VJxWtkyq5qAvgX617N/giphy.gif",
//                             "https://media.giphy.com/media/m9p9CUiHlsvEv3Z3qR/giphy.gif", "https://media.giphy.com/media/YQ5hhyI5RgAvxNgID4/giphy.gif",
//                           "https://media.giphy.com/media/f9Z0Kx7pHo39CpD7G9/giphy.gif","https://media2.giphy.com/media/dZFVIb5zmBte0MRWQ3/giphy.gif"],
// ////////////////////////////Smart Glitchy Kitchen                           
//                             ["https://i.imgur.com/Nq1qr64.png", "https://i.imgur.com/73XFv06.jpg",
//                             "https://i.imgur.com/E5TLoys.png", "https://i.imgur.com/8QNzw75.png",
//                             "https://i.imgur.com/H9c9Req.jpg", "https://i.imgur.com/HRf7MUE.jpg",],
// ////////////////////////////Game Residency
//                             ["https://i.imgur.com/lkOeAI6.jpg","https://i.imgur.com/wNNfxt3.jpg",
//                             "https://i.imgur.com/GFG6hbk.jpg","https://i.imgur.com/xZN26EE.jpg",
//                             "https://i.imgur.com/SPVaEwr.jpg","https://i.imgur.com/KqjM7CQ.jpg"],
// ////////////////////////////Ocean Sim
//                             ["https://media1.giphy.com/media/jokm2VqAgtY14A1aiU/giphy.gif","https://media1.giphy.com/media/ZdOVeHNu8buM2Cpacc/giphy.gif","https://media3.giphy.com/media/l4p7oCSu7VOIWPXQeU/giphy.gif"

//                             ],
// ////////////////////////////Boss Fight
//                             ["https://media0.giphy.com/media/WTL764Pam3Holfpi0K/giphy.webp", "https://media2.giphy.com/media/Mdiy2b8riPFS7lDZ3z/giphy.webp",
//                             "https://media1.giphy.com/media/RlZt1NpqgxhkjiTcsU/giphy.webp", "https://media0.giphy.com/media/Xy27Wet1a19bQ5lqYW/giphy.gif",
//                             "https://media2.giphy.com/media/jsNR2hrGiqcvtG6B9W/200w.webp", "https://media1.giphy.com/media/igzbVWyw7px95ZRnVh/giphy.webp"],
//  ];

//   //other work data
//   var otherWorks = document.getElementsByClassName("other-work");
//   var color = ["#165f99", "#f5cb62", "#cc6155"];

//   //title and body text
//   workTitle.innerHTML = titles[thisPage];
//   workBody.innerHTML = body[thisPage];


//   //images for each page
//   for(var i = 0; i<documentationImages[thisPage].length;i++){
//     workImages[i]=document.createElement('img');
//     workImages[i].src = documentationImages[thisPage][i];
//     workImageLocation.appendChild(workImages[i]);
//     workImageLocation.innerHTML += "<br><br>";
//     // workImageLocation.appendChild("<br>");
//   }
//   //dynamic links for other works
//   for(var i = 0; i<titles.length;i++){
//     if(i!=thisPage){
//       otherWorks[i].innerHTML = titles[i] + " / ";

//       (function(index) {
//         otherWorks[index].addEventListener("mousedown", function() {
//             loadWorkPage(index);
//           })
//           otherWorks[index].addEventListener("mouseover", function(event) {
//             event.target.style.cursor = "pointer";
//             event.target.style.color = color[index % 3];
//           })
//           otherWorks[index].addEventListener("mouseleave", function(event) {

//             event.target.style.color = "white";
//           })
//       })(i);
//     }
//   }
}

