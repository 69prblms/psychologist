$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass ('active');
        $('body').toggleClass('lock');
    });
});
$('#example-show-hide-callbacks').datepicker({
    onShow: function(dp, animationCompleted){
        if (!animationCompleted) {
            log('start showing')
        } else {
            log('finished showing')
        }
    },
    onHide: function(dp, animationCompleted){
        if (!animationCompleted) {
            log('start hiding')
        } else {
            log('finished hiding')
        }
    }
})
