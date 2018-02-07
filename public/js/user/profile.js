$(document).ready(function(){
    $('.add-btn').on('click', function(){
        $('#add-input').click();
    });
    
    $('#add-input').on('change', function(){
        var addInput = $('#add-input');
        
        if(addInput.val() != ''){
            var formData = new FormData();
            
            formData.append('upload', addInput[0].files[0]);
            $('#completed').html('File Uploaded Successfully');
            
            $.ajax({
                url: '/userupload',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(){
                    addInput.val('');
                }
            });
        }
        
        ShowImage(this);
    });
    
    $('#profile').on('click', function() {
        var username = $('#username').val();
        var fullname = $('#fullname').val();
        var country = $('#country').val();
        var gender = $('#gender').val();
        var mantra = $('#mantra').val();
        var upload = $('#add-input').val();
        var image = $('#user-image').val();
        
        var valid = true;
        
        if(upload === ''){
            $('#add-input').val(image);
        }
        
        if(username == '' || fullname == '' || country == '' || gender == '' || mantra == ''){
            valid = false;
        }
    });
    
});

function ShowImage(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $('#show_img').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}