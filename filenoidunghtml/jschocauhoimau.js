function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }
    
    function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    }


    $(function(){
        $('#contentVideo').bind('contextmenu',function(){ return false;});
    });
