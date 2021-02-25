const slideWidth = 800;

let currentSlide = 0;

let sumSlide;

const showSlide = (index)=>{
    if(index=== 0){
        $('.slide-control-prev').hide();

    }else{
        $('.slide-control-prev').show();
    }

    if(index===numSlide-1){
        $('.slide-control-next').hide();
    }else{
        $('.slide-control-next').show();
    }

    $('.slide')
    .stop()
    .animate(
        {
            left: `${-slideWidth * index}px`,
        },
        800, /** this meeans how long the duration will last */
    );
};

$('.slide-control-prev').on('click',(e)=>{
    e.preventDefault();

    currentSlide -= 1;
    showSlide(currentSlide);
});

$('.slide-control-next').on('click',(e)=>{
    e.preventDefault();

    currentSlide += 1;
    showSlide(currentSlide);
});

numSlide = $('.slide > li').length;

showSlide(currentSlide);

const socialButton =()=>{
    if($(window).scrollTop() >=300){
        $('.socialize').fadeIn();
    }else {
        $('.socialize').fadeOut();
    }
};

$(window).on('scroll',socialButton);

socialButton();

const backToTop =()=>{
    if($(window).scrollTop() >= 300){
        $('.back-to-top').fadeIn();
    }else{
        $('.back-to-top').fadeOut();
    }
};

$(window).on('scroll',backToTop);

$('.back-to-top').on('click', (e)=>{
    e.preventDefault();
    $('html,body').animate(
        {
            scrollTop: 0
        }, 600,
        );
});

backToTop();


    $('.animated').removeClass('active');

    $('.animated').waypoint({
    handler(direction) {
        if(direction==='down'){
        

            $(this.element).addClass('fadeInUp'); 
            $(this.element).removeClass('fadeOutUp');


        }
        

        
    },
    offset: '70%',});

const duration = 500;
const $title = $('.title');

$title.css({
    opacity:0,
})
    $('#projects').waypoint({
        handler(direction){
            $title.animate(
                {
                    opacity: 1,
                    animation: 'fade-in-right ease 0.4s forwards',

                    
            }
            )
        },
        
    })

   
