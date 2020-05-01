let PI = 3.14159;
//an array of synths so that multiple songs can be played at once
let xSynth =[];
let ySynth =[];
let zSynth =[];
//////////////////////////////////////synth for one one
// var synthOneOnex = new Tone.Synth({
//     oscillator: {
//       type: 'fmsine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 1.3
//     },
//     envelope: {
//       attack: 2,
//       decay: 1.3,
//       sustain: 0.25,
//       release: 1.5
//     }
//   }).toMaster();
//   var synthOneOney = new Tone.Synth({
//     oscillator: {
//       type: 'fattriangle',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   var synthOneOnez = new Tone.Synth({
//     oscillator: {
//       type: 'fattriangle',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   //////////////////////////////////////synth for one two
//   var synthOnetwox = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       //modulationType: 'sawtooth',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.3,
//       decay: 0.1,
//       sustain: 0.2,
//       release: .8
//     }
//   }).toMaster();
//   var synthOnetwoy = new Tone.Synth({
//     oscillator: {
//       type: 'amtriangle',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.5,
//       release: .8
//     }
//   }).toMaster();
//   var synthOnetwoz = new Tone.Synth({
//     oscillator: {
//       type: 'fattriangle',
//       modulationType: 'triangle',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: .5
//     }
//   }).toMaster();
//   //////////////////////////////////////synth for two one
//   var synthTwoOnex = new Tone.Synth({
//     oscillator: {
//       type: 'fatsine',
//       modulationType: 'square',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.3,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   var synthTwoOney = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   var synthTwoOnez = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   //////////////////////////////////////synth for two two
//   var synthTwotwox = new Tone.Synth({
//     oscillator: {
//       type: 'fatsine',
//       modulationType: 'square',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.3,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   var synthTwotwoy = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   var synthTwotwoz = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   //////////////////////////////////////synth for three one
//   var synthThreeonex = new Tone.Synth({
//     oscillator: {
//       type: 'fatsine',
//       modulationType: 'square',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.3,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   var synthThreeoney = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   var synthThreeonez = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   //////////////////////////////////////synth for three two
//   var synthThreetwox = new Tone.Synth({
//     oscillator: {
//       type: 'fatsine',
//       modulationType: 'square',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.3,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   var synthThreetwoy = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   var synthThreetwoz = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   //////////////////////////////////////synth for four one
//   var synthFouronex = new Tone.Synth({
//     oscillator: {
//       type: 'fatsine',
//       modulationType: 'square',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.3,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   var synthFouroney = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   var synthFouronez = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   //////////////////////////////////////synth for four two
//   var synthFourTwox = new Tone.Synth({
//     oscillator: {
//       type: 'fatsine',
//       modulationType: 'square',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.3,
//       decay: 0.1,
//       sustain: 0.2,
//       release: 1.0
//     }
//   }).toMaster();
//   var synthFourTwoy = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
//   var synthFourTwoz = new Tone.Synth({
//     oscillator: {
//       type: 'sine',
//       modulationType: 'sine',
//       modulationIndex: 3,
//       harmonicity: 3.4
//     },
//     envelope: {
//       attack: 0.1,
//       decay: 1.5,
//       sustain: 0.2,
//       release: 2.0
//     }
//   }).toMaster();
  


//song array will be the tone Loop, and the names are the song functions at the bottom
let songArray =[];
let songNames = [one1Song, one2Song, two1Song, two2Song, three1Song, three2Song, four1Song, four2Song];

//used in toggle play to check if the song is being played
let isPlaying = [false,false,false,false,false,false,false,false];

//all classes in the div that have equations w/in them
var equationDivs = document.getElementsByClassName("equationDiv");

window.onload = function(){setup();}
function setup(){
    // create 3 divs for each song
    for(var i = 0; i<songNames.length; i++){
        xSynth[i] = new Tone.Synth().toMaster();
        ySynth[i] = new Tone.MembraneSynth().toMaster();
        zSynth[i] = new Tone.FMSynth().toMaster();
    }

    //create the loop for each function
    for(var i = 0; i<songNames.length; i++){
        songArray[i]= new Tone.Loop(songNames[i], '8n');
    }
    Tone.Transport.bpm.value = 110; 
    Tone.Transport.start();
}

//add an event listener to each class that will trigger toggle play with the proper index value
for (var i = 0; i < songNames.length; i++) {
    (function(index) {
         equationDivs[index].addEventListener("mousedown", function() {
            togglePlay(index);
          })
    })(i);
}

//if its not playing play song and highlight backgroun else stop playing and unhighlight background
 function togglePlay(songNum){
     if(!isPlaying[songNum]){
        songArray[songNum].start(0);
        equationDivs[songNum].style.backgroundColor = "#383838";
        isPlaying[songNum] = true;
     }else{
        songArray[songNum].stop(0);
        equationDivs[songNum].style.backgroundColor = "#232528";
        isPlaying[songNum] = false;
     }  
}

//the equations that generate the sound 
//Confirmed
function one1Song(t){
    let xFreq = 100.0*Math.sin(t*PI) * Math.cos(t); 
    let yFreq = 100.0*Math.sin(t*PI) * Math.sin(t);
    let zFreq = 100.0*Math.cos(t*PI)* Math.cos(t);
    attackRelease(0,xFreq,yFreq,zFreq,t);
    // synthOneOnex.triggerAttackRelease(xFreq,"8n",t);
    // synthOneOney.triggerAttackRelease(yFreq,"8n",t);
    // synthOneOnez.triggerAttackRelease(zFreq,"8n",t);
    
}
//Confirmed
function one2Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * 2* Math.sin(t);
    let yFreq = 100.0*Math.cos(t*(2*PI)) * 2*Math.sin(t);
    let zFreq = 100.0* Math.sin(t * PI)*2*Math.cos(t );
    attackRelease(1,xFreq,yFreq,zFreq,t);
    // synthOnetwox.triggerAttackRelease(xFreq,"8n",t);
    // synthOnetwoy.triggerAttackRelease(yFreq,"8n",t);
    // synthOnetwoz.triggerAttackRelease(zFreq,"8n",t);
}
//Confirmed
function two1Song(t){
    let xFreq = 100.0*Math.floor(Math.sin(t*PI)) * Math.floor(Math.cos(t)); 
    let yFreq = 100.0*Math.sin(t*PI) * Math.floor(Math.sin(t)); 
    let zFreq = 100.0*Math.floor(Math.cos(t*PI)) * Math.floor(Math.cos(t));
    attackRelease(2,xFreq,yFreq,zFreq,t);
    // synthTwoOnex.triggerAttackRelease(xFreq,"8n",t);
    // synthTwoOney.triggerAttackRelease(yFreq,"8n",t);
    // synthTwoOnez.triggerAttackRelease(zFreq,"8n",t);
}
//Confirmed
function two2Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t*2)*7;  
    let yFreq = 100.0*Math.sin(t) * Math.cos(t*4)*5;
    let zFreq = 100.0*Math.sin(t)*8 *Math.sin(t);
    attackRelease(3,xFreq,yFreq,zFreq,t);
    // synthTwotwox.triggerAttackRelease(xFreq,"8n",t);
    // synthTwotwoy.triggerAttackRelease(yFreq,"8n",t);
    // synthTwotwoz.triggerAttackRelease(zFreq,"8n",t);
}
//Confirmed
function three1Song(t){
    let xFreq = 100.0*Math.sin(t*(2*PI))* 25.0  * Math.cos(t); 
    let yFreq = 100.0*Math.sin(t*PI)* 25.0  * Math.sin(t);
    let zFreq = 100.0*Math.cos(t*PI)* 25.0 * Math.cos(t * (2*PI));
    attackRelease(4,xFreq,yFreq,zFreq,t);
    // synthThreeonex.triggerAttackRelease(xFreq,"8n",t);
    // synthThreeoney.triggerAttackRelease(yFreq,"8n",t);
    // synthThreeonez.triggerAttackRelease(zFreq,"8n",t);;
}
//Confirmed
function three2Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * 10.0 * Math.sin(t * PI);
    let yFreq = 25 * Math.cos(t*(2*PI)) * 25 * Math.sin(t *(2*PI));
    let zFreq = 100.0* Math.sin(t * PI)* 5*Math.cos(t);
    attackRelease(5,xFreq,yFreq,zFreq,t);
    // synthThreetwox.triggerAttackRelease(xFreq,"8n",t);
    // synthThreetwoy.triggerAttackRelease(yFreq,"8n",t);
    // synthThreetwoz.triggerAttackRelease(zFreq,"8n",t);
}
//Confirmed
function four1Song(t){
    let xFreq = Math.cos(t*(2*PI)) * 500.0 *  Math.sin(t * (2*PI));
    let yFreq = 25.0 * Math.cos(t*PI) * 100.0 * Math.sin(t *PI)/(t/3);
    let zFreq = 100 * Math.sin(t * PI) * 25 * Math.cos(t * PI);
    attackRelease(6,xFreq,yFreq,zFreq,t);
    // synthFouronex.triggerAttackRelease(xFreq,"8n",t);
    // synthFouroney.triggerAttackRelease(yFreq,"8n",t);
    // synthFouronez.triggerAttackRelease(zFreq,"8n",t);
}
function four2Song(t){
    let xFreq = (100.0 * Math.cos(t*PI) * 10.0 *  Math.tan(t * PI))+t*10 ;
    let yFreq = (100.0 * Math.cos(t*PI) * 6* Math.sin(t *PI))+t*10;
    let zFreq = (100.0 * Math.tan(t * PI)*Math.cos(t * PI))+t*10;
    attackRelease(7,xFreq,yFreq,zFreq,t);
    // synthFourTwox.triggerAttackRelease(xFreq,"8n",t);
    // synthFourTwoy.triggerAttackRelease(yFreq,"8n",t);
    // synthFourTwoz.triggerAttackRelease(zFreq,"8n",t);
}

//the attack release function for each synth 
function attackRelease(i,x,y,z,t){
    xSynth[i].triggerAttackRelease(x,"8n",t);
    ySynth[i].triggerAttackRelease(y,"8n",t);
    zSynth[i].triggerAttackRelease(z,"8n",t);
}

//google chrome bullshit
document.documentElement.addEventListener(
    "mousedown", function(){
      mouse_IsDown = true;
      if (Tone.context.state !== 'running') {
      Tone.context.resume();
    }})
