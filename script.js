$(function(){
    $('.history').click(function(){
        $('.history-modal').fadeIn();
    });
    $('.hobby').click(function(){
        $('.hobby-modal').fadeIn();
    });
    $('.blood').click(function(){
        $('.blood-modal').fadeIn();
    });

    $('.close-modal').click(function(){
        $('.modal-wrapper').fadeOut();
    });
});