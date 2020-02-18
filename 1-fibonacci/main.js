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

const getFib = (place) => {
  const parsed = parseInt(place)
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const aOrAn = vowels.indexOf(place[0]) > -1 ? 'an' : 'a'
  if (place == 0 || isNaN(parsed)) {return `What the fuck is ${aOrAn} \"${place == '0' ? 'zero' : place}\"th place?`;}
  place -= 1
  let knownFibs = [0, 1]
  if (place < 2) {return knownFibs[place];}
  for (let i = 1; i < place; i++) {
    let first = knownFibs.shift()
    let second = knownFibs[0]
    knownFibs.push(first + second)
  }
  return knownFibs.pop();
}
