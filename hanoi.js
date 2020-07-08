console.log("hanoi");
//BLOCK VALUES
const block1 = "1";
const block2 = "2";
const block3 = "3";

//EMPTY POLES
let arrayA = [];
//where is the block in the tree
// only move last arr element if last
//element.dataset.size etc
//colummn dataset too
let arrayB = [, , ,];
//locations of blocks
let arrayC = [, , ,];

//POLE SELECTORS
let poleA = document.querySelector(".poleA");
let poleB = document.querySelector(".poleB");
let poleC = document.querySelector(".poleC");

//BLOCK SELECTORS
let block1click = document.querySelector(".block1");
let block2click = document.querySelector(".block2");
let block3click = document.querySelector(".block3");

console.log(block1, block2, block3);

arrayA = [block1, block2, block3];

let x = "";
let y = "";

function dragStart(e) {
  e.dataTransfer.setData("block1", e.target.block1click);
}

function dragDrop(e){
    e.preventDefault()
    var block = e.dataTransfer.getData(block1click)
    e.target.appendChild(poleB(block))
}
//POLE ONCLICK
// let poleAclick = poleA.addEventListener("click", function (e){
//     e.preventDefault()
//     console.log("you clicked array a")
// })
// let poleBclick = poleB.addEventListener("click", function (e){
//     console.log(arrayB)
// })
// let poleCclick = poleC.addEventListener("click", function (e){
//     console.log(arrayC)
// })

// //BLOCK ONCLICK

// let clickB1 = block1click.addEventListener("click", moveB1)
// let clickB2 = block2click.addEventListener("click", moveB2)
// let clickB3 = block3click.addEventListener("click", moveB3)

// //FUNCTIONS
// function moveB3(e){
//     e.preventDefault()
//     poleB.append(block3click)
// }
// function moveB2(e){
//     e.preventDefault()
//     poleB.prepend(block2click)
// }
// function moveB1(e){
//     e.preventDefault()
//     poleB.prepend(block1click)
// }

// function moveB3(e){
//     e.preventDefault()
//     poleC.append(block3click)
// }
// function moveB2(e){
//     e.preventDefault()
//     poleC.prepend(block2click)
// }
// function moveB1(e){
//     e.preventDefault()
//     poleC.prepend(block1click)}

// function removeFromA(block){
//     arrayA.splice(arrayA.length, 1)
// }

// function addToB(block) {
//     if (arrayB.length == 0) {
//          arrayB.append(block[x])
//   } if (arrayB.length >= 1 && block[x] < block[y]){
//         arrayB.splice(1,1)
//   }
// }

// function removeFromB(block){
//     arrayB.splice(arrayB.length, 1)
// }

// function removeFromC(block){
//     arrayC.splice(arrayC.length, 1)
// }

// function setUpListeners() {
//     var data = ['one', 'two', '...etc.'];

//     window.addEventListener('load', function() {
//       doSomethingWithSomeData(data);
//       // data is now part of the callback's scope.
//     });
//   }
