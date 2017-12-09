$(document).ready( function () {

});

$('.add-class').on('click', function () {
    $(this).addClass('added-class');
});

$('.remove-class').on('click', function () {
    $(this).removeClass('added-class');
});

$('.toggle-class').on('click', function () {
   $(this).toggleClass('added-class');
});

$('.get-attr').on('click', function () {
   var BtnAttr=$(this).attr('type');
    console.log(BtnAttr);
});

$('.set-attr').on('click', function () {
    $(this).attr('type', 'button');
});

$('.alert-onclick').on('click', function () {
    alert('Alert On Click!');
});

$('.trigger-alert-onclick').on('click', function () {
   $('.alert-onclick').trigger('click');
});

$('.clone-this').on('click', function () {
    $(this).clone(true).addClass('cloned').appendTo('.action-clone');
    $('.clone-this.cloned').text('Clone Me!(cloned)');
});

$('.closest-element').on('click', function () {
    var BtnParent=$(this).parent()[0] .tagName; // why [0]??
    console.log(BtnParent);
});


$('.each-btn-text').on('click', function () {
  var BtnTexts = [];
  $('button').each(
      function () {
          BtnTexts.push($(this).text());
      }
  );
    for(var i=0;i<BtnTexts.length;i++) {
        console.log(BtnTexts[i] + '\n');
    }
});


$('.find-me').on('click', function () {
    var BtnText=$('body').find(this).text();
    console.log('button `' + BtnText + '` finded!');
});

$('.fade-in').on('click', function () {
   $('.not-displayed').fadeIn(1000);
});

$('.fade-out').on('click', function () {
    $('.not-to-display').fadeOut(1000);
});

$('.hide-text').on('click', function () {
    $('.text-to-hide').hide(1000);
});

$('.show-text').on('click', function () {
    $('.hidden-text').show(1000);
});

$('.data').on('click', function () {
    var h = 'height: ' + $(this).outerHeight() + 'px\n',
        w = 'width: ' + $(this).outerWidth() + 'px\n',
        top = 'top: ' + $(this).offset().top + 'px\n',
        left = 'left: ' + $(this).offset().left + 'px\n',
        parent = 'parent: ' + $(this).parent()[0].tagName + '\n',
        prev = 'previous element: ' + $(this).prev().text() + '\n',
        next = 'next element: ' + $(this).next().text() + '\n\n';

    var attr=this.attributes;

    console.log('Data about me:\n\n' +
        h + w + top + left + parent + prev + next + 'My attributes:\n\n');

    for(var i=0;i<attr.length;i++) {
        console.log(attr[i].nodeName + ': ' + attr[i].nodeValue, '\n');
    }
});




