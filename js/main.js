//dynamically create each page
//starting from the top left of the gallery each page has a number 0,1,2,3,4,5....
//This numbers are then used to dynamically generate the page...meaning that the arrays must all match
//title array 0 must correspond with body array 0, and the images as well.

//arrays for populating page
var titles = ["[ERR]rational", "Creative Mathematics", "Smart Glitchy Kitchen", "Game Design Residency","Alphabets Got Talent"];

var body = [
  //////////Errrational
            "[ERR]rational is an audio-visual artwork that is completely generated through mathematics.<br><br>"+ 
            "The term math tends to trigger negative memories for most, and that is due to how we are exposed to it. "+ 
            "It is presented to us as a convoluted set of rules that we must follow to achieve an arbitrary answer, but "+ 
            "in reality math is a rich and complex language. It is a way to explain the relationships that surround, and impact our lives.<br><br>"+
            "In this piece, Michael uses the principles of signal processing to create 3D objects and tonal "+
            "patterns. By using mathematics as an artistic medium it becomes clear that we do not need to separate the arts and sciences as we do, "+
            "and should instead embrace the rich creative complexities of the field.<br><br>"+
            "<a href ='../Thesis/index.html' target = '_blank'><u>Click Here</u></a> to see the full project",
/////////////Creative Mathematics
            'As a study into both Unity and Mathematics, I developed a series of sketches to explore different perspectives of these topics. These sketches delve into varied aspects of both Unity and math. I cover mathematical'+
            ' topics ranging from trigonometry, fractals, and boid logic. For Unity I explore the line renderer, trail renderer, lighting, and shaders.',
////////////Smart Glitchy Kitchen
            'Smart Glitchy Kitchen is a physical game with a large scale controller where a rookie chef needs to prepare an apple pie by carefully following the instructions. What our beloved chef doesn’t know is that this new tech kitchen has lots of flaws and glitches. It seems easier than it is. <br><br>'+
            'In the end, Smart Glitchy Kitchen was exhibited in the independent game gallery called "Baby Castles. The game was too difficult for any one person, but it was great to see teams of people struggle to cook their pie in the alloted time.',
////////////Game Design Residency
            'During this Game Design Residency with the Staten Museum of Kunst in Copenhage, I collaborated with students from the "Royal Danish Academy of Fine Arts" to create this interactive game.<br><br>'+
            'The goal of this residency was to increase audience engagement. The museum saw that people, on average, would visit less than 2 of their exhibits. So, we created a game that would encourage exploration through the space<br><br>'+
            'Users would wear these masks, which would have prompts on them to explore the museum from a new perspective. Through testing we found that there was a significant increase in how far museum goers would explore along with them enjoying the experience of being part of the performance.',
 /////////////Alphabets Got Talent
            'Alphabets Got Talent is the product of a 48 hour Morse Code Game Jam by a team of two Parsons and two New York University students in partnership with The Adaptive Design Association and Google.<br><br>'+
            ' The goal of the project was to teach our client Morse code in a fun, interactive way using topics they were interested in. Our team was paired with an Adaptive Design client who had limited motor functions,'+
            ' so we used two simple switches, to represent the dot and dash of Morse code. These switches then utilized the Google Gboard Morse keyboard to control the output of letters. In the game, the user uses the switches'+
            ' to type a letter in Morse Code and an animal with the corresponding name would appear “dancing” and making animal noises. For example an elephant appearing when the user enters a dit (dot), the Morse code for “e.”',
]

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
  console.log(index);
  window.name = index;
  window.location.href = "work.html";
}
function populatePage(){
  //name of this page
  var thisPage = window.name
  //text data for this page
  var workTitle = document.getElementById("work-text-title");
  var workBody = document.getElementById("work-text-body");
  //image data for this page
  var workImageLocation = document.getElementById("the-images");
  var workImages =[];
  var documentationImages=[
//////////////////////////////Errrational
                            ["https://i.imgur.com/maV2QIE.gif", 
                            "https://i.imgur.com/78YKZSA.gif", "https://i.imgur.com/t2E5sx9.gif", ],
////////////////////////////Creative Math
                            ["https://lh3.googleusercontent.com/sQsEJ1khEE3pMCxd-DpKoSDlCgkINAJg4kwvn3IO7ile0dwe9YWfnglqFysqh98HJUbHhp9KMpUmRbfLvhSliWxnnPzi3a79YctlqhwopzxoUxytQKLoNp2bdV4h8TT79WYzwhw6tbK_Y795u0-W-LMoh1mcdAhAza9467APojTK-OEGr4ZFpfJ3YgQyzDr_BUWUqybexRd8bAm7w1fM62BOioByNiOwFf8Mu1EQPtn-xLJcBEUVB5udfBQXehcYjJNX68iFM9qol2gPyBKPQjEb4TAGal4PNXP1D4R9C4jca2V5uBfv9F4V__lHDUtKW9cr8Cqx5dsb20FPVs5RzagqUAiTcPcRHWRgfKpnKlfkUa9u9JqS2kd--5_tm8WczfDJkTMeZMEMrsJPLd7WXLdrNaT9_B1DGXeCX32Zrdy82tAmgmPtLm3MNGsNCgQG_mFZSxA7y8BC4MXxbzdB_XxFwx766XL-t8-12G1gN458obxaUKLk60JbUXnf7O_juXXtN-sNoPnnc5sciEwJALADac6bwAq1s0BUgjPLfhGPUf_1Ya__tZEqNrs8VWvpyRtNmTaJDF0JvL_GYU2TfcfRY9Iqo5OGISaOuH2ITDIayYQ1vSUyM_6398i6yfeOXNkWJRbryawNjjBdPYh_0iupWVIKHGTj2FLbpsaUFaaMiI6f_isQEvYjAn9J=w1424-h618-no?authuser=0", "https://lh3.googleusercontent.com/2Zou30ifMlisv6lZbNi2tPie9U2v8L6-FV-OeCWwrs5N2UwUl1MG9MJqv8N4fEY83meM7lCuSoCOf_iejK55xrhLyOqPjLkhwReCOgON5nnXRVz1jRpLQCULLiq2jaJfhebXRGOqPQwajTE-eCetrzqK9M2M6l2PjSHWYeCr3IkKYaWxLzGE-tXFNALvXAysrzh_VHJew-od4OYC618EuATPmdCNXyMTvp6jYOJwmIexJgbUz10Vfp5XFAOZ1_CAwqGeYwNHU-cHzeEp9WL_UFuh2e8Agga1SiGLYNr58nL_1yg4RFG7pcIzoiyJwXFqC2td-25_VqR9Zi4QrJfuVciZkI1OxKXBVbwsM9pJL8DG0rm6DRUKh9yetW7xIhFmUHU41F5kWOzn38aSs7OQmV1f4ajsSpHgoNaMmuoC5UHc-yx4fWZYjHsvrrmpPNuIvAbrzeIOq-CzhfujTTjOPgdgzNMq4fTlhwRudSVZtpcGLK0lYkxAUyvkYWdKMcdwe01-mdpkO1tpaJ5MyzYkbtE8CeQ6jItjQc1u8NhO3T4nfCmfRBoztt5ncivr6PcZeM4DCx83GRb6dJlmorlGc4V8433VerWPm4xTwJIjnlW8-G1NY8IP9aE4GNoOgjUuCfrCkGoPtdVej3AJ-ap4NPOYLjPOhUWD8DKlnV4o37zcT4MHNj9BTwAoRUae=w1418-h426-no?authuser=0",
                            "https://lh3.googleusercontent.com/PmBGlFCzFiJpSqDZJyEgS8uxHgaPEsqHG5VC4cOSRA1zCOxsk-5HkH0WCHKe9z6ggou_gu2-fN-BRzUa3_DkMY-LzUO-X3XZg0NS_EUp8CtNPu96XLZI9YkPFwcwM7itPBjRX4-C1uHRROL6SCvz0DWBlIeqTE-saTF7ToN2ZFe_UW99HUeajsIuzsdMmjQyI9Rr71QDSGaptx4zB111iAcTRwgE-7oUaWCVGtUQxPgk5Zm8vxhBtSV6iyrCfYpqaG5yrXGp2UdDspwAzsGHDqgk8hfaAyCSj73XaURIu-r1I-JjQ900kwkMNSpiBXGzRonvK4CewCWQrlLBKRnXsWAFC8eM8yQSWbhMZIJif85ju1zF6Dn14_vFa2GlDXav4Ta05ssI5fqCzAs8FF74ksVtsJsxVbI761Dy7lnqlmFOUYg23pJ6qcX-31ULFMY5vigk5owhNGvj8DIYtR6t_JeJvbrOWF_bde5tWJHk15xvgGJ6_oagR32WCipFKz8pWk91ihWd_CxwCY88fMHfQ7ccj4j9tQQNdPn0VqyjWL8MzrlQJgRiaO7VqcBTqxgZPH7ZXk1dzv037mhN7tH5pOBI1sREh2IBfuzJc77OUaBXm3Co7JdF8vmMRtKOjeHYrSqDNVS6ing-JqLD8aLCyZZhBBfQa_bL1PmZetUFCY38AwJm4OGg9LtXT6Vh=w382-h281-no?authuser=0", "https://lh3.googleusercontent.com/0Ttmsb0ks-hA8QwNrVxQwMcYYPBfQdpiT8iPr8lc9Tg_x_cSyD0jtkOFqw1cCv15lnG_6lAuw752d8U8OyrGsoi3bFCvnfIeDoY0eAOq64250RDYse4_NNTcilLe8fF-pQFemhdEaiGL7QL6mPLSgAhCyTmCIakJV095gL78czskjT2rnxUgtpu0kts95OeuNTHl2NRPDGCRv1qGpPsKM4xrZDLThrkWokNWrlofeF9XCb6BlPFYVz7sZLoL6o_vJYVsuPJjn8s5wMfzDBTMQNbkLpqbu2MNvhvCYay0lscSR0D1s8NOloMoKWKNHog66_8ItYhEXHAyE6W9VwVJWFB4EX_sXiBaAK5Zun9LHDZrP0QU3DFG68y5GH9wuxVa4uGBrJl5uyA2-0qAc2mwgU8V7RO2iyuN1lSzzEnqG78vgGqybjTnF1Rkb9Z_40CKC49WMld3Uw4MFcHqQ0x0iyo6clVV-6d6tE8oZPj1zzv68PoVT6pw-_aH2-01aaMM-dtJBVCAwXi3I0_WXK1YIbmqg60uTJrk4AWYE8JmuJwGe1mLDJSU0tkgiALpD6G9EiTtdJLyx5SkZiRCgSMz8RJObC6de-eTLSZ_FMwQeWNHDwoX7IJeVI6Y4fgO0FD0zXMXvnfuL71f4flDuVhZ4PcDg9TVAVxAl79k5sBxreOXXsnCNcM2B253qEuT=w976-h585-no?authuser=0",
                            "https://lh3.googleusercontent.com/TGEph6aSgG1g728rcj24Rz-cJCtoGULcH6cAQ-lz0-4L-n_G4lGX2I0F-VWZn-r-vr5RhyyEYEQ2_azzJ9VZDRhFy0ioKhyZBseP0_A190XS84BQpMJ6AtKogH7CQK0FvYlRMZTsnR_Fva0bdqNF4yQ7GbQgAKb7JWCoY8sAxrIUtr_zrUm85WypAlmyZewWZGHihS5tFKWGkUHprlZkYyNsOyyiKlOQ58jHrT_hPSojuha0zzLiVprOy18Ywf_WjLKkbznfChJNcGdjK_Uy5ESTqM61K8xOuRuV4BPk9m1rZqW16h25OhztVidBbuDi_uRmOxDeCrYTPjdgEHmVZkz254GsLIWytE0NHsouK0TNxk6O6seBOd7iHz-Bhc0v4iWI66G1KXIlDw0vWJ8xMuwefmRE2gHCEcohbelKpsAbfRU-ycrc_mLzqiGQ0fo5FWd1EEFD62Cow5a0dyoMhxqE-9ih88l42FKTHYkACeTRM97RZnPOgueZjrFE1g5CwKO2hXHI2tpd-BWS8OR5dB-JOk-Fz4hvAouhTt2VGaqTTBAsQUBmhR5y16h5bFXv68BEutUMaj2HmyrR4jOjpNUu4bXCZw1R0Mj2E2zwAk7MeeVFpZ80u48TXMnWjSTkJDvsKqo0xu7HXnYqsjHmwBvW122rKeTCAPZ6-Im7aZAkBG2o9dB6PKGDAZ5K=w762-h585-no?authuser=0", "https://lh3.googleusercontent.com/i4FIvVQJxZXlFsrYpvDfOZ9VD9jSIPlv1m0uiC4j1DA3QJLnCubPC7aR8tx9tNH5fXhzjRt8bipw3zeOcqSZD4AhLyy8P2FAdfPz-RtFY79bndlwjrOHIiCXnfPKrZdu5SM_TlUMaSqjwN1VxsiL16gQBILbA31WKjZhCumJ1gKRLorDqJkqSWcLaYcvoGP8izZaAXyhEj4lU51Nr8bIF4Ui29m5Xapig7kj-Qo67peydOOTeIdxj4WodLS2GtfMwSZh693kPip7wCILrZlHHqqTXXun8yibuCdTOKCwlYbnHmCT6WCNzdIzNUzO3OPw5uTDNiyhB334e7zDrBnF1lZ87IS9FnATsbBOhkFzc5xMxVF3nd5CApJK8Y9LRLYGyhE_XUUeI98xfjR_3zHQTpIvCPrSXEuprTu4Kg7rC91ymhc5Sc5bJieEHf5ZufQpyHwRKW5-EK-gN5xS5AeNMGn8KTRM7AIcrvUzpuarkgPIyQO6D0c8RLrzKaYOhnLFC5DfFtj-pP4NpNlIPbD3IXS2ZCqjapvSOUBzvvr0cMX-DlhK2UIagh0mjKvjBoZBzvPVyphaHaewGJaQKxKlgLukDQND9NY2ZnYeZm4AEOt0j1zP8823oumc7QNNK-Dk0WDPjVc7xdrOvZcV4tvfmk2lz3JmQD5Ju99riSoobpcx0a0rtcwVr9Lu1BkN=w1021-h595-no?authuser=0",],
////////////////////////////Smart Glitchy Kitchen                           
                            ["https://i.imgur.com/Nq1qr64.png", "https://i.imgur.com/73XFv06.jpg",
                            "https://i.imgur.com/E5TLoys.png", "https://i.imgur.com/8QNzw75.png",
                            "https://i.imgur.com/H9c9Req.jpg", "https://i.imgur.com/HRf7MUE.jpg",],
////////////////////////////Game Residency
                            ["https://i.imgur.com/lkOeAI6.jpg","https://i.imgur.com/wNNfxt3.jpg",
                            "https://i.imgur.com/GFG6hbk.jpg","https://i.imgur.com/xZN26EE.jpg",
                            "https://i.imgur.com/SPVaEwr.jpg","https://i.imgur.com/KqjM7CQ.jpg"],
 ////////////////////////////Alphabets Got Talent
                            ["https://i.imgur.com/qgUoh6r.png", "https://i.imgur.com/13fGFBA.png", 
                            "https://i.imgur.com/f8oLcQO.png", "https://i.imgur.com/6fghUD0.png"],
];
                          console.log(documentationImages[3].length)
  //other work data
  var otherWorks = document.getElementsByClassName("other-work");
  var color = ["#165f99", "#f5cb62", "#cc6155"];

  //title and body text
  workTitle.innerHTML = titles[thisPage];
  workBody.innerHTML = body[thisPage];


  //images for each page
  for(var i = 0; i<documentationImages[thisPage].length;i++){
    workImages[i]=document.createElement('img');
    workImages[i].src = documentationImages[thisPage][i];
    workImageLocation.appendChild(workImages[i]);
    workImageLocation.innerHTML += "<br><br>";
    // workImageLocation.appendChild("<br>");
  }
  //dynamic links for other works
  for(var i = 0; i<titles.length;i++){
    if(i!=thisPage){
      otherWorks[i].innerHTML = titles[i] + " / ";

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
}

