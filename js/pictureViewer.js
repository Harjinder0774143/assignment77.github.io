$(function () {
    var modal = new Modal();
    var $content = $('#share-options').detach();
$('.thumb').click(function(e){
    e.preventDefault();
    var anchorHref = e.target.parentNode.href;
    var arrayvalue = anchorHref.split('/')
     var hrefPhotoFrame =   arrayvalue[arrayvalue.length-1]
     $("#main").attr('src', `img/${hrefPhotoFrame}`);
  $("a.photo-frame").attr('href',`img/${hrefPhotoFrame}`);
});
$("#main").click(function(e){
e.preventDefault();
modal.open({
        content: $content,width: 800,height: 450
});
var anchorHref = e.target.currentSrc;
var arrayvalue = anchorHref.split('/')
var hrefPhotoFrame =   arrayvalue[arrayvalue.length-1];
$('.modal-content').append("<div id='share-options'></div>");
$(".modal-content").append("<img id='loader'  src='img/load.gif' width='800' height='400'  class='modalImageBorder'  alt=''>")
setTimeout(function(){
$("#loader").remove();
$("#share-options").append("<img id='imageViewerModal' class='modalImageBorder'  alt=''>");
$("#imageViewerModal").attr('src', `img/${hrefPhotoFrame}`);
}, 2000)      
})
});