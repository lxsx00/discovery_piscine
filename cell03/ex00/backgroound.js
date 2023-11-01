function randomBackgroundColor = () => {
    
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
        let bgColor = `rgb(${r}, ${g}, ${b})`
        document.body.style.background = bgColor;
      }

      randomBackgroundColor()
      