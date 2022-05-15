var div_items = document.getElementById("items");
div_items.innerHTML = "";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/api/items", requestOptions)
  .then(response => response.json())
  .then(result => {
      console.log(result)
        result= result.reverse();

        for (var i = 0; i < result.length; i++) {
            div_items.innerHTML += `<div class='d-flex align-items-baseline justify-content-between alert alert-primary m-2'>
            <p id='${result[i].id}'>${result[i].title}</p>
            <div class='d-flex align-items-baseline'>
              <a onclick="editItem(${result[i].id})" class='btn btn-primary m-1'  role='button'>Edit </a>
              <a onclick='deleteItem(${result[i].id})' class='btn btn-danger m-1'  role='button'>Delete </a>
              </div>
              </div>`;
              
              // document.getElementById("").addEventListener("click", editItem(result[i].id,result[i].title));
            }
    
    })
  .catch(error => {
              div_items.innerHTML += "<div class='row'>" + error + "<div/>";
  });
