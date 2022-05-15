function addItem() {
  var itemTitle = document.getElementById('titleInp').value;


  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify({ title: itemTitle }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };

  console.log(itemTitle)

  fetch("http://localhost:3000/api/items", requestOptions)
    .then(response => response.json())
    .then(result => {
      window.location.reload(true);
    })
    .catch(error => {
      div_items.innerHTML += "<div class='row'>" + error + "<div/>";
    });
}

