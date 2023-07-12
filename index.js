const shareButtons = document.querySelectorAll('.tile-share-butt')

 async function copyText(e) {
  //prevent button going to the site
    e.preventDefault()
    const link =this.getAttribute('link')
    
    try {
         await navigator.clipboard.writeText(link)
         alert("link copied: " + link)
    } catch (err) {

    }
}

shareButtons.forEach(shareButton => 
  shareButton.addEventListener('click', copyText))