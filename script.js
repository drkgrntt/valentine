// ========================== //
//     Purple Heart Rain      //
// ========================== //

function createHeart() {
  const heart = document.createElement("i")
  heart.className = "fas fa-heart heart-rain"

  heart.style.left = Math.random() * 100 + "vw"
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"

  document.body.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 5000)
}

setInterval(createHeart, 300)

// ========================== //
//       Customization        //
// ========================== //

let to = "Ceanne"
let message = "I love you,"
let from = "Derek"

try {
  let [_, params] = window.location.search.split('?')
  if (params) {
    params = params.split('&')
    params = params.reduce((newParams, param) => {
      const [key, value] = param.split('=')
      return { ...newParams, [key]: value }
    }, {})

    if (params.to) to = decodeURI(params.to).replaceAll('+', ' ')
    if (params.message) message = decodeURI(params.message).replaceAll('+', ' ')
    if (params.from) from = decodeURI(params.from).replaceAll('+', ' ')
  }
} catch {}

document.getElementById('to').innerText = to
document.getElementById('message').innerText = message
document.getElementById('from').innerText = from
