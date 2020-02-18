const handleKeys = (e) => {
  if (e.keyCode == 13 || e.which == 13) {
    displayResults();
  }
}

const clearResults = () => {document.getElementById("fibResult").innerHTML = '';}

const displayResults = () => {
  const input = document.getElementById("fibInput").value,
        result = document.getElementById("fibResult"),
        newResult = document.createElement('div')
  
  result.prepend(newResult)
  result.firstChild.innerHTML = getFib(input)
}

const formatResult = (place, result) => {
  const teens = ['11', '12', '13']
  let indicator
  if (teens.includes(place)) {
    indicator = 'th'
  } else {
    const ones = parseInt(place[place.length - 1])
    switch (ones) {
      case 1: indicator = 'st'; break;
      case 2: indicator = 'nd'; break;
      case 3: indicator = 'rd'; break;
      default: indicator = 'th'; break;
    }
  }
  return `The <strong>${place}${indicator}</strong> number of the Fibonacci sequence is <strong>${result}</strong>.`;
}

const validateInput = (input) => {
  if (input == "") {return `Hey, buddy, you wanna try entering an actual value?`}
  const parsed = parseInt(input)
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const aOrAn = vowels.includes(input[0]) ? 'an' : 'a'
  const invalidInput = input == '0' ? 'zero' : input
  if (input == 0 || isNaN(parsed)) {
    return `What the fuck is ${aOrAn} \"${invalidInput}\"th place?`;
  } else if (input < 0) {
    return `What is this shit? We're not calculating negafibonacci here, man.`;
  }
}

const getFib = (place) => {
  const error = validateInput(place)
  if (error) { return error; }

  const fixedPlace = BigInt(place) - 1n
  let knownFibs = [0n, 1n]
  if (fixedPlace < 1) { return formatResult(place, knownFibs[fixedPlace]); }
  for (let i = 1; i < fixedPlace; i++) {
    let first = knownFibs.shift()
    let second = knownFibs[0]
    knownFibs.push(first + second)
  }
  return formatResult(place, knownFibs.pop());
}

  // 6th:
  // const invalidInput = (input) => {
  //   const parsed = parseInt(input)
  //   const vowels = ['a', 'e', 'i', 'o', 'u']
  //   const aOrAn = vowels.includes(input[0]) ? 'an' : 'a'
  //   if (input == 0 || isNaN(parsed)) {
  //     return `What the fuck is ${aOrAn} \"${input == '0' ? 'zero' : input}\"th place?`;
  //   }
  // }

  // const getFib = (place) => {
  //   if (invalidInput(place)) {
  //     return invalidInput(place)
  //   }
  //   place -= 1
  //   let knownFibs = [0, 1]
  //   if (place < 2) {return knownFibs[place];}
  //   for (let i = 1; i < place; i++) {
  //     let first = knownFibs.shift()
  //     let second = knownFibs[0]
  //     knownFibs.push(first + second)
  //   }
  //   return knownFibs.pop();
  // }

  // 5th:
  // const getFib = (place) => {
  //   const parsed = parseInt(place)
  //   const vowels = ['a', 'e', 'i', 'o', 'u']
  //   const aOrAn = vowels.indexOf(place[0]) > -1 ? 'an' : 'a'
  //   if (place == 0 || isNaN(parsed)) {return `What the fuck is ${aOrAn} \"${place == '0' ? 'zero' : place}\"th place?`;}
  //   place -= 1
  //   let knownFibs = [0, 1]
  //   if (place < 2) {return knownFibs[place];}
  //   for (let i = 1; i < place; i++) {
  //     let first = knownFibs.shift()
  //     let second = knownFibs[0]
  //     knownFibs.push(first + second)
  //   }
  //   return knownFibs.pop();
  // }

  // 4th:
  // const getFib = (place) => {
  //   place -= 1
  //   let knownFibs = [0, 1]
  //   if (place < 1) {return knownFibs[place];}
  //   for (let i = 1; i < place; i++) {
  //     let first = knownFibs.shift()
  //     let second = knownFibs[0]
  //     knownFibs.push(first + second)
  //   }
  //   return knownFibs.pop();
  // }

  // 3rd:
  // function getFib(place) {
  //   let knownFibs = [0, 1]
  //   for (let i = 2; i < place; i++) {
  //     let sum = knownFibs[i - 1] + knownFibs[i - 2]
  //     knownFibs.push(sum)
  //   }
  //   return knownFibs[place - 1];
  // }

  // 2nd:
  // function getFib(place, knownFibs = {1:0, 2:1}) {
  //   console.log(place, knownFibs);
  //   if (knownFibs[place] === undefined) {
  //     let value = getFib(place - 1, knownFibs) + getFib(place -2, knownFibs)
  //     knownFibs[place] = value
  //     return value;
  //   } else {
  //     return knownFibs[place];
  //   }
  // }

  // 1st:
  // function getFib(place) {
  //   if (place < 3) {
  //     return place - 1;
  //   } else {
  //     return getFib(place - 1) + getFib(place - 2)
  //   }
  // }
