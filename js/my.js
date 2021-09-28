// $(function () {
//     $(".bg_Items").hover(function () {
//         $(this).toggleClass('bg_ItemsHover bg_Items');
//     });
// });

$(function(){
    $('#myPicture').hover(function(){
        console.log("Hovering")
        $(this).toggleClass('pictureIcon pictureNoIcon')
    })
})

// $(function () {
//     $(".bg_Items").hover(function () {
//         $('.list-buttons').toggleClass('buttons-hide buttons-unhide');
//     });
// });

