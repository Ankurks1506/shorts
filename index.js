import filenames from "./a.js";

let count =0
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the down arrow key

   
if (event.key === 'ArrowDown') {

        const comingUpText = document.querySelector('.coming-up-text');
        count++
        
        
// Trigger animation after 1 second

setTimeout(() => {
    comingUpText.style.animation = 'slideIn 2s ease-in-out forwards';
}, 1000);

        const sou =document.getElementById("sou")
        sou.src = filenames[count]
        sou.load()
    }
});



