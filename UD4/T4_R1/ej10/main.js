function enableDragMultiple() {
    var imgs = document.querySelectorAll('img');
    var current = null, offsetX = 0, offsetY = 0;

    imgs.forEach(img => {
        img.addEventListener('mousedown', e => {
            current = img;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        });
    });

    document.addEventListener('mousemove', e => {
        if(current) {
            current.style.position = 'absolute';
            current.style.left = (e.pageX - offsetX) + 'px';
            current.style.top = (e.pageY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => current = null);
}

(function initExercise10() {
    window.addEventListener('load', enableDragMultiple);
})();
