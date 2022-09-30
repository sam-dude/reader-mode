// const bookList = document.querySelector('#book-list');

// var btns = document.querySelectorAll('#book-list .delete  ');


// btns.forEach((btn) => {
//     btn.addEventListener('click', (e)=>{

//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)

//     });
// });
const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})