
$(function(){
    var game_array = [];  //this is to store all cards
    var total_num_cards = 36;
    var waiting;  //this is for the short waiting time after the player has just chosen two cards
    var timer;  //this is for the timer
    var game_status = 0; // 0 = player has NOT chosen any card; 1 = player has chosen 1 card; 2 = player has chosen 2 cards
    var timer_started = false;  //the timer does not start at the beginning
    function init_game_arr() { //this function is to assign values for the game
        var i = 1;
        timer_started = false;
        while (game_array.length < total_num_cards) {
            game_array.push(i);
            game_array.push(i); // we push two times to ensure there are always pairs of numbers for matching
            i++;
        }
        game_array.sort( () => 0.5 - Math.random() )  //this is to shuffle the game_array.
    }
    
    function start_timer(){    //function for the timer
        if (timer_started) return;
        timer = setInterval(function(){
            current = $("#timer").html();
            current++;
            $("#timer").html(current);
        }, 1000);
        timer_started = true;
    }

    function init_game_board(){   //this function is to set the initial status of the game (after refresh page or restart game)
        game_array = [];   //this is to clear the game_array after each game
        waiting = null;
        timer_started = false;   //the timer does not start at the beginning
        timer = null;
        $("#timer").html("0");
        $("td").each( function(){
            $(this).attr( "data-value", null );    //set the data value of each <td> to null
            $(this).removeClass("available").removeClass("bingo").removeClass("temp");  //remove all classes of each <td>
            $(this).html('');   //remove any display of each <td>
        });
        $("#btn_restart").remove();   //remove restart button if there is one
        
        init_game_arr();    //after resetting all <td>, then we can start setting up the game.
        
        $("td").each( function(){   //this function is for each <td> 
            $(this).attr( "data-value", game_array.pop() );   //assign attribute 'data-value' in each <td> with game_array.
            $(this).addClass("available");    //add class to each <td> to available
            $(this).html( $(this).data("value") );    //display the value in <td>, it is not visible as font-color is same as background color 
        } );
        
        $("td").on("click", function(){     //this function is for when player clicks on the td
            if ( $(this).hasClass("bingo") ) return;     //check that the class of that <td> should not be 'bingo'
            if ( $(this).hasClass("temp") ) return;      //check that the class of that <td> should not be 'temp'
            if ( $("td.available").length == $("td").length ) {   //start the timer
                start_timer();
            }
            if (waiting != null) return;    //check that the player should not be able to click during the waiting time.
            
            
            if ( $(this).hasClass("available") ) {   //the click function should only be available when the class of <td> is 'available'
                game_status++;
                $(this).removeClass("available").addClass("temp");  //when player clicks on <td>, the class of <td> changes to 'temp'
                if ( game_status == 2) check_selection_match();  //if the player has selected 2 <td>, system should check if they're matched
            }
        })
    }
    
    function check_selection_match(){   //this is to check whether the 2 selected <td> are matched or not
        waiting = setTimeout( function() {
            first = $("td.temp").eq(0).html();  //get the values of the two selected td (class = 'temp') and store them to first and second
            second = $("td.temp").eq(1).html();
            if ( first == second ) {
                $("td.temp").removeClass("temp").addClass("bingo");  //this is for bingo (the 2 selected <td> are matched)
            } else {
                $("td.temp").removeClass("temp").addClass("available");  //this is to returning the class of the 2 <td> to available
            }
            game_status = 0;   //set the game_status back to 0

            if ( check_game_win() ) {    //this is to check if all <td> have been selected
                end_game();
            }
            waiting = null;  //reset variable waiting
        }, 1000);  // execute check_selection_match() after 1 second, i.e. 1 second waiting time allowed for player
    }
    
    function check_game_win(){
        return $("td.bingo").length == total_num_cards;   //when class for all <td> = 'bingo', game ends
    }
    
    function end_game(){
        alert("Congratulations! You have used " + $("#timer").html() + " seconds");
        clearInterval(timer);
        timer_started = false;
        $("#rtcolumn").append("<button id='btn_restart'>Restart</button>");   //append a restart button after end game
    }
    
    $("body").on("click", "#btn_restart", function(){    //onclick function for the restart button
        init_game_board();
    })
    

    init_game_board();
})