const form = document.querySelector('#form')
const inputText = document.querySelector('.input_text')
const outLists = document.querySelector('.out_lists')


let listsKey = []
 
// if (localStorage.getItem('listsKey')) {
//   listsKey=JSON.parse(localStorage.getItem('listsKey'))
// }

// listsKey.forEach(function(task) {
//   const listHTML = `
//         <li id='${task.id}' class="out_list">
//           <input class="list_title" value='${task.text}' readonly/>
//           <div class="list_button">
//             <button id='1'
//              class="change_list" data-action="change">Change</button>
//             <button id='delete'class="delete_list" data-action="delete">Delete</button>
//           </div>
//         </li>`
  
//   outLists.insertAdjacentHTML('beforeend', listHTML)
// });

const lists = document.querySelector('#lists')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  const inputValue = inputText.value
  const newList = {
    id: Date.now(),
    text: inputValue,
    //changed: 0
  }
  listsKey.push(newList)
  // saveToLocalStorage()
  //console.log(listsKey)

  const listHTML = `
        <li id='${newList.id}' class="out_list">
          <input class="list_title" value='${newList.text}' readonly/>
          <div class="list_button">
            <button id='1'
             class="change_list" data-action="change">Change</button>
            <button id='delete'class="delete_list" data-action="delete">Delete</button>
          </div>
        </li>`
  if (inputText.value === "") {
    alert('Enter text please!!!')
  }
  else { outLists.insertAdjacentHTML('beforeend', listHTML) }
  inputText.value = ""
  inputText.focus()

  // let s = true
  // const listTitle = document.querySelector('.list_title')
  // const outList = document.querySelector('.out_list')
  // const item = document.getElementById('1')
  
  // item.addEventListener('click', (e) => {
  //   //console.log(s = !s);
  //   if (s=!s) {
  //     listTitle.removeAttribute('readonly')
  //     listTitle.focus()
  //   }
  //   else{
  //     listTitle.setAttribute('readonly', 'readonly')
  //   }
    //console.log(e.target.dataset.action);
  //})
  // const item2 = document.getElementById('delete')
  // item2.addEventListener('click', (e) => {
  //   outList.remove()
  // })
})
// функция для удаления список
outLists.addEventListener('click', deleteList)
function deleteList(event) {
  if (event.target.dataset.action === 'delete') {
    const parentTag = event.target.closest('.out_list')

    const id = Number(parentTag.id)
    
    const index=listsKey.findIndex(function (task) {
      // console.log(task)
      if (task.id === id) {
        return true
      }
    })
    // console.log(index)
    listsKey.splice(index, 1)
    // saveToLocalStorage()

    parentTag.remove()
    //console.log('deleted')
  }
}

// функция для изменения список
outLists.addEventListener('click', changeList)
let s = false
function changeList(event) {
  if (event.target.dataset.action === 'change') {
    const parentTag = event.target.closest('.out_list')
    const listTitle = parentTag.querySelector('.list_title')

    // const id = Number(parentTag.id)
    // const task = listsKey.find(function (task) {
    //   if (task.id === id) {
    //     return true
    //   }
    // })
    // for (let i; i < task.length;i++)
    // console.log(task.length)
    

    if (s=!s) {
      listTitle.removeAttribute('readonly')
      listTitle.focus()
      event.target.innerText = 'Save'
      //console.log(event.target)
    }
    else{
      listTitle.setAttribute('readonly', 'readonly')
      event.target.innerText = 'Change'
      //console.log(event.target)
    }
    //console.log("click btn change")
  }
}

// function saveToLocalStorage() {
//   localStorage.setItem('listsKey',JSON.stringify(listsKey))
// }

































































// const outList = document.querySelector('.out_list')
// const item2 = document.getElementById('delete')
// if (item2) {
//   item2?.addEventListener('click', () => {
//     console.log('delete')
//     outList.remove()
//   });
// };
// function deleteList(event) {
//   //console.log('delete')

//   if (event.target.dataset.action === 'delete') {
//     const listNode = event.target.closest('.out_list')
//     listNode.remove()
//   }
// }
//   // saveHTMLtoLS()
// }
// outLists.addEventListener('click', changeList)
// function changeList(event) {
//   console.log(event.target.innerText)
//   const listNode = event.target.closest('.out_list')
//   const listTitle = listNode.querySelector('.list_title')

//   if (event.target.dataset.action === 'change') {
//     listTitle.removeAttribute('readonly')
//     listTitle.focus()
//     event.target.innerText = 'Save'
//   }
//   if (event.target) {
//     if (event.target.innerText === 'Save') {
//       console.log(event.target)
//       listTitle.setAttribute('readonly', 'readonly')
  
//     }  
//   }
  // saveHTMLtoLS()
// }
// function saveHTMLtoLS() {
//   localStorage.setItem('listsKey', outLists.innerHTML)
// }
