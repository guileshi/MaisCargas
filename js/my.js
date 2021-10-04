let cel = window.matchMedia('(max-width: 576px)');
let tablet = window.matchMedia('(min-width: 768px)');
let pc = window.matchMedia('(min-width: 992px)');

$(function () {
    $('.toggler-icon').click(function () {
        $('.sideBar').toggleClass('noCollapse')
        $('#bars-icon').toggleClass('hide unHide')
        $('#close-icon').toggleClass('hide unHide')
    })
})

$(function () {
    $('.main-content').click(function () {
        $('.sideBar').removeClass('noCollapse')

        if($('#bars-icon').hasClass('hide')){
            $('#bars-icon').removeClass('hide')
            $('#bars-icon').addClass('unHide')
        }

        if($('#close-icon').hasClass('unHide')){
            $('#close-icon').removeClass('unHide')
            $('#close-icon').addClass('hide')
        }
    })
})

$(function(){
    $('#item-create').click(function(){
        $('#form-create').removeClass('hide')
        $('#form-create').addClass('unHide')
    })
})
