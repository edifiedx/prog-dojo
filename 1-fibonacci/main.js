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

function getFib(place, knownFibs = {1:0, 2:1}) {
  console.log(place, knownFibs);
  if (knownFibs[place] === undefined) {
    let value = getFib(place - 1, knownFibs) + getFib(place -2, knownFibs)
    knownFibs[place] = value
    return value;
  } else {
    return knownFibs[place];
  }
}
