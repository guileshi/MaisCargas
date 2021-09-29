// Função para aparecer o icone na foto quando o mouse estiver por cima
$(function(){
    $('#myPicture').hover(function(){
        console.log("Hovering")
        $(this).toggleClass('pictureIcon pictureNoIcon')
    })
})

$(function(){
    $('.sideBar').hover(function(){
        $(this).toggleClass('noCollapse')
    })
})