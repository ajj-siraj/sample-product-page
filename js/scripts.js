$(document).ready(function () {
    var imgID=0;
    var imageUrls = ["./img/guitar-background-jumbotron.jpg",
        "./img/guitar-background-jumbotron-2.jpg",
        "./img/guitar-background-jumbotron-3.jpg",
        "./img/guitar-background-jumbotron-4.jpg"
    ];
    window.setInterval(function(){
        $('.jumbotron').removeClass('background-animation');

        if(imgID>=imageUrls.length){
            imgID=0;
            $('.jumbotron').css("background-image", "url(" + imageUrls[imgID] + ")");
            
            imgID++;
        }
        else{

            $('.jumbotron').css("background-image", "url(" + imageUrls[imgID] + ")");
            imgID++;
        }
        $('.jumbotron').addClass('background-animation');
    }, 5000);
    
});