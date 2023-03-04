

function alertMsg()
{
    alert('Hello world');
    document.getElementById('TextArea').style.fontSize = '24pt';
}

function fancySchmancy()
{
    alert('FancySchmancy is activated!');
    document.getElementById('TextArea').style.fontWeight = 'bold';
    document.getElementById('TextArea').style.color = 'blue';
    document.getElementById('TextArea').style.textDecoration = 'underline';
}

function boringBetty()
{
    alert('BoringBetty is activated');
    document.getElementById('TextArea').removeAttribute('style');
}

function mooTextArea()
{
    var textString = document.getElementById('TextArea').value;
    var parts = textString.split(/[.?!]/);
    textString = parts.join('-Moo');
    document.getElementById('TextArea').value = textString.toUpperCase();
}