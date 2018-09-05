
   $(document).on('turbolinks:load', function() {
        $('#sub_form').submit('ajax:success',function(){
            alert('successfuly made a bid!')
            $("<%= j (flash[:notice]='done') %>")
        })
})


     


