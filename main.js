Webcam.set({
    width:400, height:400, 
    image_format:"png", png_quality:90 
});

Webcam.attach("#Webcamm")

function capture(){
    Webcam.snap(function(e){
        document.getElementById("image_result").innerHTML = "<img id='result_image' src=' " + e +"'>"
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s9n1zDSkX/model.json", modelloaded)

function modelloaded(){
    console.log("shgdvbla;fkvvvvvvvn;alkfgn;lkanfnlnllsndfbl;nlnsdffbbl;knsdbvbflnklkasbdklasbflkbfdklsbdfaskvdb;b;sbd;;kasbdv;;kabgf.kajsbvkbjassk")

}

function identify(){
    img = document.getElementById("result_image")
    classifier.classify(img, gotresult)
}

function gotresult(error, results){
    if(error){
        console.log(error)
    }else{
        console.log(results)

    }
}


















