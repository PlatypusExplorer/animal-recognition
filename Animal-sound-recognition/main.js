function startClassification() {
    navigator.mediaDevices.getUserMedia({   audio:  true    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4z-Q1ybSf/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}