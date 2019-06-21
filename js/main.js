         // Click and Mouse Events
 $(document).ready(function(){
    
    //   $('#btn1').click(function(){
    //         // $('.para1').hide();
    //         $('.para1').toggle();
    //     });    

    //     $('#btn2').click(function(){
    //         $('.para1').show();
    //     }); 

    //  $('#btn1').dblclick(function(){
    //     $('.para1').toggle();
    // });

    //   $('#btn1').hover(function(){
    //     $('.para1').toggle();
    //  }); 

    // $('#btn1').mousedown(function(){
    //     $('.para1').toggle();
    //  });   

    //  $('#btn1').mouseup(function(){
    //     $('.para1').toggle();  
    //  });

    //  $('#btn1').click(function(e){
    //    alert(e.currentTarget.id);
    //    alert(e.currentTarget.innerHTML);
    // alert(e.currentTarget.outerHTML);
    // alert(e.currentTarget.className);
    // }); 

    //   $(document).mousemove(function(e){
    //      $('#coords').html('Coords: Y: ' + e.clientY + 'X: '+e.clientX); 
    //   });


      //Form Events
      /*
      $('input').focus(function(){
         // alert('Focus');
         $(this).css('background', 'pink');   //this refers to whatever element your currently in, in this case its the input we click in.
      });

      $('input').blur(function(){
         // alert('Focus');
         $(this).css('background', '#ffffff');
      });

      $('input').keyup(function(e){
         console.log(e.target.value)
      });
      
      $('select#gender').change(function(e){
         alert(e.target.value);
      });
      */

      $('#form').submit(function(e){
         e.preventDefault();                    // Prevents actual submission by passing in e
         var name = $('input#name').val();      // Gives us the value of the text entered in name
         console.log(name);
      });
    });


