var addButton = document.getElementById('add')
var dropSelect = document.getElementById('drop')
var cart = document.getElementsByClassName('kart')[0]

function onAddButtonClick() {
  console.log(dropSelect.value)
  var newItem = document.createElement("div")
  newItem.textContent = dropSelect.value
  cart.append(newItem)
  newItem.addEventListener('click',function(){
    console.log(newItem)
    newItem.remove()
  })
}

addButton.addEventListener('click', onAddButtonClick)

