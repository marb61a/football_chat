$(document).ready(function(){
    LoadData('.paginate');
    return GetResult();
});

function GetResult(){
    $.ajax({
        url: "",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var results = '';
            
            $.each(data.response.results, function(i){
                results += '<form class="paginate">';
                results += '<div class="col-md-12 news-post">';
                results += '<div class="row">'
            });
        }
    });
}

function LoadData(divClass){
    $('#loadMore').on('click', function(e){
        e.preventDefault();
        
        $(divClass+":hidden").slice(0, 3).slideDown();
    });
}