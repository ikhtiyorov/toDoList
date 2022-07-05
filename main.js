const form = document.querySelector('#form')
const inputText = document.querySelector('.input_text')
const outLists = document.querySelector('.out_lists')
const change_list = document.querySelector('.change_list')


const lists = document.querySelector('#lists')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  const inputValue = inputText.value

  const listHTML = `
        <li class="out_list">
          <input class="list_title" value='${inputValue}' readonly/>
          <div class="list_button">
            <button class="change_list" data-action="change">Change</button>
            <button class="delete_list" data-action="delete">Delete</button>
          </div>
        </li>`
  if (inputText.value === "") {
    alert('Enter text please!!!')
  }
  else { outLists.insertAdjacentHTML('beforeend', listHTML) }
  inputText.value = ""
  inputText.focus()
})

outLists.addEventListener('click', deleteList)
function deleteList(event) {
  
  if (event.target.dataset.action === 'delete') {
    const listNode = event.target.closest('.out_list')
    listNode.remove()
  }
}
outLists.addEventListener('click', changeList)
function changeList(event) {
  const listNode = event.target.closest('.out_list')
  const listTitle = listNode.querySelector('.list_title')
  
  if (event.target.dataset.action === 'change') {
    
    listTitle.removeAttribute('readonly')
    listTitle.focus()
    
  }
  else  {
    
    listTitle.setAttribute('readonly','readonly')
    
  }
}












