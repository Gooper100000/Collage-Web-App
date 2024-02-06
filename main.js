var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(events) {
    console.log(events)
    var content = events.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content;
    if (content=="take my selfie") {
        speak()
    }
}
function speak(){
    var sinth = window.speechSynthesis
    speakdata = document.getElementById("textbox").value
    utter = new SpeechSynthesisUtterance(speakdata)
    sinth.speak(utter)
    Webcam.attach(camera)
    setTimeout(() => {
        take_snapshot()
        
    }, 5000);
    setTimeout(() => {
        take_snapshot2()
        
    }, 10000);
    setTimeout(() => {
        take_snapshot3()
        
    }, 15000);
}
camera = document.getElementById("camera")
Webcam.set({
    width:360,height:250,image_format:"jpeg",jpeg_quality:90
})
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie_img").src = data_uri
    })
}
function take_snapshot2(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie_img2").src = data_uri
    })
}
function take_snapshot3(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie_img3").src = data_uri
    })
}

