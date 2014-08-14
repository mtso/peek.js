$('a.peekable').hover(function(e) {
    // GENERATE PREVIEW IFRAME
    var frame = document.createElement('iframe');
    frame.addClass='myclass';
    frame.src = this.getAttribute('href'); //  $(this).attr('href')
    //frame.target='_top';
    
    // STYLE PREVIEW IFRAME
    frame.style.display='block';
    frame.style.margin='10px';
    frame.style.border='none';
    frame.style.backgroundImage='url("img/loading.gif")';
    frame.style.width='500px';
    frame.style.height='400px';
    frame.style.borderStyle='inset';
    frame.style.borderWidth='1px';
    frame.style.borderColor='#999';//'-1px -1px 2px #999';
    
    // GENERATE PREVIEW DIV
    var preview = document.createElement('div');
    preview.innerHTML = $(this).attr('href'); // The text that displays inside the preview
    preview.id='temp';
    preview.appendChild(frame);

    // STYLE PREVIEW DIV
    preview.style.backgroundColor='#00a0c6';
    preview.style.position='fixed';
    preview.style.display='block';
    preview.style.textAlign='center';
    preview.style.padding='8px';
    preview.style.margin='10px';
    preview.style.borderRadius='10px';
    preview.style.fontSize='13pt';
    preview.style.fontWeight=100;
    preview.style.boxShadow='1px 1px 2px #999';
    
    $(this).append(preview);
}, function () {
    document.getElementById('temp').remove();
});
