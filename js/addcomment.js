'use strict';

// assign value to the array
let comments=['I love the music of Hong Kong.', 'Cannot wait for the next festival', 'The mini game is so interesting!!!']; 


function commentList() {
    let ulist = "";
    for (let i = 0 ; i <comments.length; i++){ // loop for create list element
        ulist+= "<li>" + comments[i]+ "</li>" 
    }
    document.getElementById("unOrderList").innerHTML = ulist; //display the ulist to the unorder list
}


function addComment(){
    let newComment = document.getElementById("newComment").value //get the value from user input (#newComment)
    comments.push(newComment); //push the user input from #newComment to the array
    commentList(); 
}