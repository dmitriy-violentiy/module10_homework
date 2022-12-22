const but = document.getElementById('but')
const btnSvg1 = document.getElementById('btn-svg1')
const btnSvg2 = document.getElementById('btn-svg2')

but.addEventListener('click', function() {
      if(btnSvg1.style.display == "inline" && btnSvg2.style.display == "none") {
         btnSvg1.style.display = "none"
         btnSvg2.style.display = "inline"
      } else {
         btnSvg1.style.display = "inline"
         btnSvg2.style.display = "none"
      }
})