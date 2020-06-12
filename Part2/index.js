const cardSuit = document.getElementById('idInput')

// console.log(cardSuit)
console.dir(cardSuit)

const cardStyle = document.getElementById('colorInput')

// console.log(cardStyle)

function setCard(){
  const card = document.getElementById(cardSuit.value)
  card.style.color=cardStyle.value
}

function resetCard(){
  const card = document.getElementById(cardSuit.value)
  card.removeAttribute("style")
}

