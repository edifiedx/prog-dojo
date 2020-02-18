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