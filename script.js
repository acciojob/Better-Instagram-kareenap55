const images = document.querySelectorAll(".image");
 //your code here
 
 let draggedItem = null;
 const images = document.getElementsByClassName("image");
 let draggedElement = null;
 
 images.forEach((image) => {
     image.addEventListener("dragstart", (event) => {
         draggedItem = event.target;
         event.dataTransfer.setData("text/html", draggedItem.outerHTML);
         setTimeout(() => (draggedItem.style.display = "none"), 0);
     });
 for(let i=0; i<images.length; i++){
 	images[i].addEventListener("dragstart", (e) => {
 		draggedElement = e.target;
 		draggedElement.classList.add("selected");
 	});
 
     image.addEventListener("dragover", (event) => {
         event.preventDefault();
     });
 	images[i].addEventListener("dragover", (e) => {
 		e.preventDefault();
 		draggedElement.classList.add("selected");
 	});
 
     image.addEventListener("drop", (event) => {
         event.preventDefault();
         if (draggedItem !== event.target) {
             let temp = draggedItem.style.backgroundImage;
             draggedItem.style.backgroundImage = event.target.style.backgroundImage;
             event.target.style.backgroundImage = temp;
         }
         draggedItem.style.display = "block";
         draggedItem = null;
     });
 	images[i].addEventListener("drop", (e) => {
 		e.preventDefault();
 
     image.addEventListener("dragend", () => {
         if (draggedItem) draggedItem.style.display = "block";
     });
 });
 		 if (!draggedElement) {
 	        console.error("draggedElement is null");
 	        return;
 		}
 		draggedElement.classList.remove("selected");
 		
 		let draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
 		let targetBg = window.getComputedStyle(e.target).backgroundImage;
 		if (draggedBg !== targetBg) {
 			draggedElement.style.backgroundImage = targetBg;
 			e.target.style.backgroundImage = draggedBg;
 
 			[draggedElement.innerText, e.target.innerText] = [e.target.innerText, draggedElement.innerText]
 	    }
 	})
 }


