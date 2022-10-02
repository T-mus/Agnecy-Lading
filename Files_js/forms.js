document.addEventListener('DOMContentLoaded', function(){

    // Capture form
    let fisrst_form = document.getElementById('capture_form');
    let elm_mail = document.getElementById('first_email');
    
    fisrst_form.addEventListener('submit', function(e){

        if(emailTest(elm_mail)){
            elm_mail.classList.add('_error');
            e.preventDefault();
        }
    });
    elm_mail.addEventListener('focus', function(){
        if(elm_mail.classList.contains('_error')){
            elm_mail.classList.remove('_error');
        }
    });
    // Symbol limit
    elm_mail.oninput = function(){
        this.value = this.value.substr(0, 30);
    }

    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    // Footer form

    let second_form = document.getElementById('footer_form');
    let elm_name = document.getElementById('user_name'); 
    let elm_email_f = document.getElementById('second_email');

    second_form.addEventListener('submit', function(e){
        
        // Name input
        if(elm_name.value == ""){
            elm_name.classList.add('_error');
            e.preventDefault();
        }

        // Email input
        if(emailTest(elm_email_f)){
            elm_email_f.classList.add('_error');
            e.preventDefault();
        }
    });

    // Name input halper
    elm_name.addEventListener('focus',function(){
        if(elm_name.classList.contains('_error')){
            elm_name.classList.remove('_error');
        }
    });
    // Email input halper
    elm_email_f.addEventListener('focus', function(){
        if(elm_email_f.classList.contains('_error')){
            elm_email_f.classList.remove('_error');
        }
    });
    // Symbol limit
    elm_name.oninput = function(){
        this.value = this.value.substr(0, 30);
    }
    elm_email_f.oninput = function(){
        this.value = this.value.substr(0, 30);
    }
});