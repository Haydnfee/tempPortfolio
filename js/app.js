    //jquery and plugins

$(document).foundation()

    $(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('.home').css('background-position', x + 'px 0');
        }, 20);
    })

    $('.bannerTxtWrap').textillate({
        in: {
            effect: 'fadeIn',
            delayScale: 2,
            delay: 25,
            shuffle: true}

    });

//js
    //lightbox
    var lightbox = document.querySelector('#lightbox')
        img01 = document.querySelector('#imgCon01')
        img02 = document.querySelector('#imgCon02')
        img03 = document.querySelector('#imgCon03')
        img04 = document.querySelector('#imgCon04')
        img05 = document.querySelector('#imgCon05')
        img06 = document.querySelector('#imgCon06')
        span = document.querySelector('.closeBTN')
        lbImg = document.querySelector('.lbContent')    
    

    img01.onclick = (function(){
        lightbox.style.display = "block";
        var galImg = window.getComputedStyle(this).getPropertyValue("background-Image");
        lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
        console.log(galImg);
    })

    img02.onclick = (function(){
        lightbox.style.display = "block";
        var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
        lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
        console.log(galImg);
    })

    img03.onclick = (function(){
        lightbox.style.display = "block";
        var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
        lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
        console.log(galImg);
    })

    img04.onclick = (function(){
        lightbox.style.display = "block";
        var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
        lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
        console.log(galImg);
    })

    img05.onclick = (function(){
        lightbox.style.display = "block";
        var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
        lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
        console.log(galImg);
    })

    img06.onclick = (function(){
        lightbox.style.display = "block";
        var galImg = window.getComputedStyle(this, null).getPropertyValue("background-Image");
        lbImg.src = galImg.slice(4, -1).replace(/"/g, "");
        console.log(galImg);
    })



    span.onclick = (function(){
        lightbox.style.display = "none";

        
    }); 