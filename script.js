const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function () {
        draggedElement = this;
    });

    draggable.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    draggable.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedElement && draggedElement !== this) {
            let tempBg = this.style.backgroundImage;
            this.style.backgroundImage = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = tempBg;
        }
    });

    draggable.addEventListener('dragend', function () {
        draggedElement = null;
    });
});


