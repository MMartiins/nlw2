// Search the button
document.querySelector("#add-time")
// When you click the button
.addEventListener('click', cloneField)
// Perform an action
function cloneField() {
  // Duplicate fields
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  
  //take the fields. What fields? 
  const fields = newFieldContainer.querySelectorAll('input')

  // para cada campo, limpar
  fields.forEach(function (field) {
    //take the field of the moment and clean it 
    field.value=""
  })

  // Place on page
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}