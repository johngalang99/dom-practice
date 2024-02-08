// // const grandparent = document.getElementById('grandparent-id');
// const grandparent = document.querySelector('.grandparent');

// const parents = Array.from(document.getElementsByClassName('parent'))

// // parents.forEach(element => {
// //     changeColor(element);
// // });

// changeColor(grandparent);

// function changeColor(el) {
//     el.style.backgroundColor = 'gray';
// }

// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// grandparent.addEventListener('click', (e) => {
//     console.log('grandparent bubble');
// }, {once: true})

// parent.addEventListener('click', printHi)

// setTimeout(() => {
//     parent.removeEventListener('click', printHi)
// }, 2000)

// child.addEventListener('click', (e) => {
//     console.log('child bubble');
// })


// function printHi() {
//     console.log('Hi');
// }

const divs = document.querySelectorAll('div');

    document.addEventListener('click', (e) => {
        if(e.target.matches('div')) {
            console.log('hi')
        }
    })

const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'purple';
document.body.appendChild(newDiv);