function runQuestion (qu, ans1, ans2, ans3, ans4, nextQuestion){
    var pageDiv = parent.document.getElementById("page");
if(pageDiv) {
    pageDiv.style = "position:relative; z-index:5";
};

var footerWrapperDiv = parent.document.getElementById("footer-wrapper");
if(footerWrapperDiv){
    footerWrapperDiv.style = "position: relative; z-index:1;";
};

var surveyContainer = document.createElement("div");
surveyContainer.setAttribute("id", "surveyContainer");
surveyContainer.setAttribute("style", "position: fixed;width: 250px;height: auto;background-color: #fff;bottom: 25px;border-right:1px solid #F0EDEF;z-index: 6;");

parent.document.body.appendChild(surveyContainer);

var surveyStyle = document.createElement("style");
surveyStyle.innerHTML = ".surveyButton {float: left;width: 100%;height: 35px;margin-bottom: 15px; border-radius: 10px; color: #000; border:none; cursor:pointer; font-size:[%ButtonFontSize%]; font-family:verdana} .surveyButton:hover{color:#02AFF9; background-color:#fff;} @media only screen and (max-width:1780px){#surveyContainer {display:none;}}";
surveyContainer.appendChild(surveyStyle);


var surveyContainerTop = document.createElement("div");
surveyContainerTop.setAttribute("id", "surveyContainerTop");
surveyContainerTop.setAttribute("style", "float:left; width: 100%; height: 50px; background-image:url('./images/raaadh.png'); background-size: 100%;");
surveyContainer.appendChild(surveyContainerTop);


var closeButton = document.createElement("div");
closeButton.setAttribute("id", "closeButton");
closeButton.setAttribute("style", "position: absolute; margin:-10px 0 0 240px; cursor: pointer; border-radius:50%; width: 20px; border: 1px solid #343434; height: 20px; background-image:url('https://res.cloudinary.com/do4cvpacv/image/upload/v1567161150/HP%20Windows%207%20Survey%20Creative%202019/hp-win-7-close-button_1.png')");
surveyContainerTop.appendChild(closeButton);

closeButton.addEventListener("click", function(){
    surveyContainer.style = "display: none";
});

var surveyContainerMiddle = document.createElement("div");
surveyContainerMiddle.setAttribute("id", "surveyContainerMiddle");
surveyContainerMiddle.setAttribute("style", "float:left; background-color: #fff; width: 100%; height: auto;");
surveyContainer.appendChild(surveyContainerMiddle);


var surveyQuestion = document.createElement("p");
surveyQuestion.setAttribute("id", "surveyQuestion");
surveyQuestion.setAttribute("style", "font-size:1.1rem; font-family:verdana; padding: 15px 15px 0px 15px; text-align:center;");
surveyQuestion.innerHTML = qu;
surveyContainerMiddle.appendChild(surveyQuestion);


var surveyButtonDiv = document.createElement("div");
surveyButtonDiv.setAttribute("id", "surveyButtonDiv");
surveyButtonDiv.setAttribute("style", "width:95%;height: 100%;background-color: ;margin: auto;text-align:center;");

surveyContainerMiddle.appendChild(surveyButtonDiv);


var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

button1.setAttribute("class", "surveyButton");
button2.setAttribute("class", "surveyButton");
button3.setAttribute("class", "surveyButton");
button4.setAttribute("class", "surveyButton");

button1.setAttribute("id", "button1");
button2.setAttribute("id", "button2");
button3.setAttribute("id", "button3");
button4.setAttribute("id", "button4");

var response1 = ans1;
var response2 = ans2;
var response3 = ans3;
var response4 = ans4;

button1.innerHTML = response1;
button2.innerHTML = response2;
button3.innerHTML = response3;
button4.innerHTML = response4;

surveyButtonDiv.appendChild(button1);
surveyButtonDiv.appendChild(button2);

if(response3){
    surveyButtonDiv.appendChild(button3);
}

if(response4){
    surveyButtonDiv.appendChild(button4);
}


var surveyContainerBottom = document.createElement("div");
surveyContainerBottom.setAttribute("id", "surveyContainerBottom");
surveyContainerBottom.setAttribute("style", "float:left; background-image:url('./images/raaadh.png'); background-size: 100%; width: 100%; height: 50px; text-align: center;");
surveyContainer.appendChild(surveyContainerBottom);


var impressionTracker = document.createElement("img");
impressionTracker.setAttribute("id", "impressionTracker");
impressionTracker.setAttribute("src", "");
impressionTracker.setAttribute("style", "display: block; position: absolute; width: 1px; height: 1px");

surveyContainerBottom.appendChild(impressionTracker);

button1.addEventListener("click", function(){
    if(!nextQuestion){
        surveyQuestion.innerHTML = "Thank you for your responses.";
    }
    surveyButtonDiv.style = "display:none";
    impressionTracker.src = "https://pubads.g.doubleclick.net/gampad/ad?iu=/359/impcount.co.uk&sz=1x1&d_imp=1&d_imp_hdr=1&t=surveyCreativeId%3D[%SurveyCreativeId%]%26response%3D1&c=%%CACHEBUSTER%%";
    window.parent.permutive.track('campaignResearchSurveys', {
        responseClicked: "1",
        surveyCreativeId: "[%SurveyCreativeId%]"
    })
    if(nextQuestion){
        surveyContainer.innerHTML = ''
        nextQuestion()
    }
});

button2.addEventListener("click", function(){
    if(!nextQuestion){
        surveyQuestion.innerHTML = "Thank you for your responses.";
    }
    surveyButtonDiv.style = "display:none";
    impressionTracker.src = "https://pubads.g.doubleclick.net/gampad/ad?iu=/359/impcount.co.uk&sz=1x1&d_imp=1&d_imp_hdr=1&t=surveyCreativeId%3D[%SurveyCreativeId%]%26response%3D2&c=%%CACHEBUSTER%%";
    window.parent.permutive.track('campaignResearchSurveys', {
        responseClicked: "2",
        surveyCreativeId: "[%SurveyCreativeId%]"
    })
    if(nextQuestion){
        surveyContainer.innerHTML = ''
        nextQuestion()
    }
});

button3.addEventListener("click", function(){
    if(!nextQuestion){
        surveyQuestion.innerHTML = "Thank you for your responses.";
    }
    surveyButtonDiv.style = "display:none";
    impressionTracker.src = "https://pubads.g.doubleclick.net/gampad/ad?iu=/359/impcount.co.uk&sz=1x1&d_imp=1&d_imp_hdr=1&t=surveyCreativeId%3D[%SurveyCreativeId%]%26response%3D3&c=%%CACHEBUSTER%%";
    window.parent.permutive.track('campaignResearchSurveys', {
        responseClicked: "3",
        surveyCreativeId: "[%SurveyCreativeId%]"
    })
    if(nextQuestion){
        surveyContainer.innerHTML = ''
        nextQuestion()
    }
});

button4.addEventListener("click", function(){
    if(!nextQuestion){
        surveyQuestion.innerHTML = "Thank you for your responses.";
    }
    surveyButtonDiv.style = "display:none";
    impressionTracker.src = "https://pubads.g.doubleclick.net/gampad/ad?iu=/359/impcount.co.uk&sz=1x1&d_imp=1&d_imp_hdr=1&t=surveyCreativeId%3D[%SurveyCreativeId%]%26response%3D4&c=%%CACHEBUSTER%%";
    window.parent.permutive.track('campaignResearchSurveys', {
        responseClicked: "4",
        surveyCreativeId: "[%SurveyCreativeId%]"
    })
    if(nextQuestion){
        surveyContainer.innerHTML = ''
        nextQuestion()
    }
});
}

runQuestion('Question 1', '1', '2', '3', '4', question2)

function question2 (){
runQuestion('Question 2', '1', '2', '3', '4', question3)
}

function question3 (){
runQuestion('Question 3', '1', '2', '3', '4', question4)
}

function question4 (){
runQuestion('Question 4', '1', '2', '3', '4')
}
