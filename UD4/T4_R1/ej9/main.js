function enableDragSingle() {
    var img = document.querySelector('img');
    var offsetX, offsetY, dragging = false;

    img.addEventListener('mousedown', e => {
        dragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    document.addEventListener('mousemove', e => {
        if(dragging) {
            img.style.position = 'absolute';
            img.style.left = (e.pageX - offsetX) + 'px';
            img.style.top = (e.pageY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => dragging = false);
}

(function initExercise9() {
    window.addEventListener('load', enableDragSingle);
})();
