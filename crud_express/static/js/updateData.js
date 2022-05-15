


function editItem(id) {

  var title=document.getElementById(id).innerHTML;

  var itemTitle = prompt("Please enter item to update", title);

  if (itemTitle == "") {
    alert("Please fill the input field")
    return;
  }
  if (itemTitle.length < 3) {
    alert("Item length should be greater than 2")
    return;
  }

    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
      body: JSON.stringify({ title: itemTitle }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    
    fetch("http://localhost:3000/api/items/"+id, requestOptions)
      .then(response => response.json())
      .then(result => {
console.log(result);
        window.location.href="http://localhost:3000/";
      })
      .catch(error => {
        div_items.innerHTML += "<div class='row'>" + error + "<div/>";
      });
  
}
  
  