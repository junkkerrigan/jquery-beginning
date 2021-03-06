const TextInput=$('input[type=text]'),
    TextArea=$('textarea');

$('input[type!=checkbox]').change( function () {
    var ValueOfInput = $(this).val();
    console.log($(this).attr('name') + ' changed: ' + ValueOfInput);
});

TextArea.change( function () {
    var ValueOfInput = $(this).val();
    console.log($(this).attr('name') + ' changed: ' + ValueOfInput);
});

$('select').change( function () {
    var ValueOfInput = $(this).val();
    console.log($(this).attr('name') + ' changed: ' + ValueOfInput);
});

$('input[type=checkbox]').change( function () {
    var ValueOfInput = $(this).val();
    if($(this).is(':checked')) {
        console.log($(this).attr('name') + ' added: ' + ValueOfInput);
    }
    else {
        console.log($(this).attr('name') + ' removed: ' + ValueOfInput);
    }
});

$('form').submit( function () {

    console.log('\nForm data:\n\n');

   $('input[type=text]').each( function () {
     console.log($(this).attr('name') + ': ' + $(this).val());
   });

    $('input[type=email]').each( function () {
        console.log($(this).attr('name') + ': ' + $(this).val());
    });

    $('input[type=radio]').each( function () {
        if($(this).is(':checked')) {
            console.log($(this).attr('name') + ': ' + $(this).val());
        }
    });

    $('input[type=checkbox]').each( function () {
        if($(this).is(':checked')) {
            console.log($(this).attr('name') + ': ' + $(this).val());
        }
    });

    $('textarea').each( function () {
        console.log($(this).attr('name') + ': ' + $(this).val());
    });

    $('select').each( function () {
        console.log($(this).attr('name') + ': ' + $(this).val());
    });

   return false;
});

TextInput.keydown( function () {
   alert('You`re trying to enter the symbol');
});

TextArea.keyup( function () {
    alert('You have entered the symbol `' +
        $(this).val()[$(this).val().length - 1] + '`');
});

TextArea.change( function () {
    var InputName = $(this).attr('name'), InputVal = $(this).val();
   $('input[type=text]').each( function () {
      if($(this).attr('name')!=InputName) $(this).val(InputVal);
   });
});
