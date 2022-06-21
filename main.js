var SpeechRecognition = window.webkitSpeechRecognition;
var reognition = new SpeechRecognition() ;

function start()
{
 document.getElementById("textbox").innerHTML="";
 reognition.start();   
}

reognition.onresult = function(event){

    console.log(event);

var Content = event.result[0][0].transcript;
    
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
        
    
}