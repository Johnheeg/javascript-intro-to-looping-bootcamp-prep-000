function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      //I am 1 strange loop
      array.push("I am 1 strange loop.")

    }
    else {
      //I am $$ strange loops
      array.push(`I am ${i} strange loops.`)
    }
  }
}

function whileLoop(num) {
  while(num > 0) {
    console.log(--num)
  }
  console.log("done")
}

var test = [0, 1, 2]
forLoop(test)
console.log(test)

function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(array) {
  do {
      array.pop()
  } while(maybeTrue())
}
