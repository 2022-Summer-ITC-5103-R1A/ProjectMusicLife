
fetch('./artista.json')
    .then(function(response){
    return response.json();
        })
    .then(function(data){
        //console.log(data);
        let output ="";
        for(var i=0; i<data["sings"].length;i++){
            //console.log(data["sings"][i].id);
            output = output + `<div class="col-md-4">
                                 <div class="card-peru">
                                    <div class="image-header"><img src="${data["sings"][i].imagen}" class="img-fluid"></div>
                                    <div class="name-header">${data["sings"][i].id} - ${data["sings"][i].name}</div>
                                    <div class="card-description">${data["sings"][i].description}</div>
                                    <div class="card-video"><iframe width="100%" height="315" src="https://www.youtube.com/embed/${data["sings"][i].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                                 </div>
                               </div>`;  
        }
        document.getElementById('listdata').innerHTML = output;
    })

  