window.onload = () => {
  titles = document.querySelectorAll("#title > span")
  ShowTitle = (i) => {
    setTimeout(() => {
      titles[i].style.transform = "translateY(0)"
      titles[i].style.opacity = "1"
      i++
      if (titles[i]) {
        ShowTitle(i)
      }
    }, 100)
  }
  ShowTitle(0)
  if (window.innerHeight > window.innerWidth) {
    alert('横持ち推奨です')
  }
}



current_id = 0
points = document.getElementsByClassName('outer_point')
for (i = 0; i < points.length; i++) {
  points[i].addEventListener('click', (e) => {
    id = e.target.parentNode.id
    if (e.target.parentNode.classList.contains('dis')) {
      return;
    }
    current_id = Number(id[1])
    board = document.getElementById('board' + current_id)
    button = board.querySelector('.button')
    board.style.display = "block"
    setTimeout(() => {
      board.style.transform = "rotateX(0)"
    })
    board.style.backgroundColor = "rgba(34,34,34,0.8)"
    if (button.id!="button_f") {
      button.addEventListener('click', () => {
        board.style.display = "none"
        board.style.transform = "rotateX(-90deg)"
        board.style.backgroundColor = "rgba(34,34,34,0)"
        Open("p" + (current_id + 1))
      })
    }
  })
}



function Open(id) {
  point = document.getElementById(id)
  setTimeout(() => {
    point.classList.remove('dis')
  }, 3000)
  if (isZoomOut) {
    ChangeScale()
    setTimeout(() => {
      xy = point.getBoundingClientRect()
      abp = main.getBoundingClientRect()
      main.style.transform = "translateX(calc(" + (-xy.x + abp.x) + "px + 50vw - " + xy.width / 2 + "px)) translateY(calc(" + (-xy.y + abp.y) + "px + 50vh - " + xy.height / 2 + "px))"
    }, 2000)
  } else {
    xy = point.getBoundingClientRect()
    abp = main.getBoundingClientRect()
    setTimeout(() => {
      main.style.transform = "translateX(calc(" + (-xy.x + abp.x) + "px + 50vw - " + xy.width / 2 + "px)) translateY(calc(" + (-xy.y + abp.y) + "px + 50vh - " + xy.height / 2 + "px))"
    }, 300)
  }
}


isZoomOut = false
current_style = ""
zoom.addEventListener('click', (e) => {
  ChangeScale()
})
button_f.addEventListener('click', (e) => {
  board.style.display = "none"
  board.style.transform = "rotateX(-90deg)"
  board.style.backgroundColor = "rgba(34,34,34,0)"
  ChangeScale()
})


function ChangeScale() {
  if (isZoomOut) {
    isZoomOut = false
    main.style.transform = current_style;
    plus.style.opacity = 0
  } else {
    isZoomOut = true
    current_style = "" + main.style.transform
    main.style.transform = "translateX(-50vw) translateY(-50vh) scale(0.5)";
    plus.style.opacity = "1"
  }
}


document.addEventListener('keydown', (e) => {
  if (e.key == "C" && e.shiftKey) {
    for (i = 0; i < points.length; i++) {
      points[i].classList.remove('dis')
    }
  }
})
