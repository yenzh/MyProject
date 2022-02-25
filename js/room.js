$(document).ready(function (){
    // $('.size_text').click(function(){
    //     $('.size_text').addClass('-on')
    // })
    $('.btn_ap').on("click", function (){
        $('aside').toggleClass("-on");
    });

    $('.btn_hidden').on("click", function (){
        $('aside').toggleClass("-on");
    });
});