//your code here
const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function (e) {
        draggedElement = this;
        e.dataTransfer.setData('text/plain', this.id);
    });

    draggable.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    draggable.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedElement !== this) {
            let tempBg = this.style.backgroundImage;
            this.style.backgroundImage = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = tempBg;
        }
    });
});

