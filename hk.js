let sug = [];
console.log(sug);

$(function(){
    $("#song_list").on("change", function(){ //change the song display when changing the selected option
        $("#player").attr("src", $(this).val()); //allow to get to the youtube link
    })
})

$("#submit").on("click",function(){
    console.log($("#sname").val());
    if ($("#sname").val() != "") { // Check if the input is not empty before saving into local storage
        sug.push($("#sname").val());   //push the input value to the array
        console.log(sug);
        window.localStorage.setItem('song',JSON.stringify(sug));  //store the new sug array to localStorage in JSON format (need stringify)
        let com = document.querySelector("#comment");
        let li_element = document.createElement("li");  //create <li> tag
        li_element.innerText = $("#sname").val();  //put the input value into the newly-created tag
        com.append(li_element);  
    }
});

$("#reset").on("click", function(){
    let confirm_clear = confirm("Do you confirm to clear the song list?");
    if ( confirm_clear ) { // If user clicked "Confirm", then clear the song list.
        window.localStorage.removeItem("song");
        let com = document.querySelector("#comment");
        com.innerHTML = "";
    }
});

function init_list(){  //this is for the display of suggestion list after each refresh
    let com = document.querySelector("#comment");
    let li_element = document.createElement("li");

    let local_storage_songs = window.localStorage.getItem('song');
    if ( local_storage_songs != null ) { //check if there is any data in the localstorage. If yes, get the data and put it into the sug array
        sug = JSON.parse(local_storage_songs);  //get sug array from localStorage (need parse)

        for(let i=0; i<sug.length; i++){ //loop for displaying the array one by one
            li_element = document.createElement("li");
            li_element.innerText = sug[i];
            com.append(li_element);
        }
    }
}

init_list();