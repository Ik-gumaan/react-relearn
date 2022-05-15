function deleteItem(id){
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

  fetch("http://localhost:3000/api/items/"+id, requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result)
          window.location.reload(true);        
        })
      .catch(error => {
                  div_items.innerHTML += "<div class='row'>" + error + "<div/>";
      });
}
  
