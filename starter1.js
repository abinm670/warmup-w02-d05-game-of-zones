// console.log('starter1.js linked');




var changePlayer = 0;

$(document).ready(function(){
    

        $('.zone').on('click', function (event) 
            {

   
        if (changePlayer ===0)
        {
        $(this).off("mouseleave");
        $(this).addClass('red');
        changePlayer ++; 
            }
            
        else if(changePlayer ===1)
        { 
        $(this).off("mouseleave");
        $(this).addClass('green');
        changePlayer --; 
        }
            
      
    });

            
});   
        
            // $('.zone').on('mouseenter', function (event) {
            //     $(this).addClass('green');
            // });
        
            // $('.zone').on('mouseleave', function (event) {
            //     $(this).removeClass('green');
            // });
       

//         $('.zone').on('click', function (event) 
//             {
        
             

//     });


// });

console.log(changePlayer)


//         counter++; 
//         // $(this).toggleClass("green")
//         // $(this).toggleClass("red")
        
//         // return;
//         // check();
//         });
       
//     }

//     if(counter ===1)
//         {
//             
        
        
//             // $('.zone').on('mouseleave', function (event) {
//             //     $(this).removeClass('red');
//             // });
//         $('.zone').on('click', function (event) 
//             {  
//         $(this).off("mouseleave");
//         $(this).addClass('red');

//         counter --; 
//         // $(this).toggleClass("red")
//         // $(this).toggleClass("green")
        
//             });
            


//         }
   

// });




//----------------------------------------------------------

// }

// if(counter == 1)
// {
//     $('.zone').on('mouseenter', function (event) {
//         $(this).addClass('red');
//     });


//     $('.zone').on('mouseleave', function (event) {
//         $(this).removeClass('red');
//     });

//     $('.zone').on('click', function (event) 
//     {
//         $(this).off("mouseleave");
        
//         $(this).addClass('green');
        
//         counter ++; 
//         // check();
//     });



// }

// });





//     $('.zone').on('click', function (event) {
//         $(this).off("mouseleave");
        
//         $(this).addClass('Green');
//         counter--;
//         // check();
    
//     });




// }

// });
// // var win = 0;

//     // function check() {
        
//     //     $('.zone').each(function (index) {
            
//     //         if ($(this).hasClass('green')) {                 
//     //             win++;
//     //         }

//     //     //     if ($(this).hasClass('red')) {                 
//     //     //         counter++;
//     //     //     }
//     //     if (win === 3) {
                
//     //     var $winner = $("<h2/>").text("congratulations!");
//     //     $(".container").append($winner);
        

//     //         }
//     //     });
//     // }


// // });