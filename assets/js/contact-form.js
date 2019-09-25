(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
      $(document).on('submit','#contact_form_submit',function(e){
          e.preventDefault();
          var form = $('#contact_form_submit');
          var fName = $('#f_name').val();
          var lName = $('#l_name').val();
          var email = $('#con_email').val();
          var phoneNum = $('#phn_num').val();
          var message = $('#con_message').val();

          if (!fName) {
               $('#f_name').removeClass('error');
               $('#f_name').addClass('error').attr('placeholder','Please Enter First Name');
           }else{
               $('#f_name').removeClass('error');
           }

           if (!lName) {
              $('#l_name').removeClass('error');
              $('#l_name').addClass('error').attr('placeholder','Please Enter Last Name');
            }else{
                $('#l_name').removeClass('error');
            }

            if (!email) {
                $('#con_email').removeClass('error');
                $('#con_email').addClass('error').attr('placeholder','Please Enter Email')
            }else{
                $('#con_email').removeClass('error');
            }

            if (!phoneNum) {
                $('#phn_num').removeClass('error');
                $('#phn_num').addClass('error').attr('placeholder','Please Enter Phone Number')
            }else{
                $('#phn_num').removeClass('error');
            }

          if (!message) {
               $('#con_message').removeClass('error');
               $('#con_message').addClass('error').attr('placeholder','Please Enter Your Message')
           }else{
               $('#con_message').removeClass('error');
           }
           
          
          if ( fName && lName && email && phoneNum && message ) {
             $.ajax({
                 type: 'POST',
                 url: $(form).attr('action'),
                 data:{
                       'f_name': f_name,
                       'l_name': l_name,
                       'con_email': con_email,
                       'phn_num': phn_num,
                       'con_message': con_message,
                 },
                 success:function(data){
                       $('#contact_form_submit').children('.email-success').remove();
                       $('#contact_form_submit').prepend('<span class="alert alert-success email-success">'+data+'</span>');
                       $('#f_name').val('');
                       $('#l_name').val('');
                       $('#con_email').val('');
                       $('#phn_num').val('');
                       $('#con_message').val('');
                       $('#map').height('576px');
                       $('.email-success').fadeOut(3000);
                 },
                 error:function(res){

                 }
             });
           }else{
              $('#contact_form_submit').children('.email-success').remove();
              $('#contact_form_submit').prepend('<span class="alert alert-danger email-success">somenthing is wrong. Fill the form again, Please.</span>');
              $('#map').height('576px');
              $('.email-success').fadeOut(3000);
           }
      });
  })

}(jQuery));