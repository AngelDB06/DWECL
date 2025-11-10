function createCanvas() {
    var rows = 10, cols = 10;
    var table = document.createElement('table');
    table.id = 'canvasTable';
    for (var r = 0; r < rows; r++) {
        var tr = document.createElement('tr');
        for (var c = 0; c < cols; c++) {
            var td = document.createElement('td');
            td.dataset.r = r;
            td.dataset.c = c;
            td.addEventListener('mousemove', paintCell);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function paintCell(e) {
    if ((e.buttons & 1) !== 0) {
        if (e.ctrlKey) e.target.style.backgroundColor = 'red';
        else if (e.shiftKey) e.target.style.backgroundColor = 'blue';
    }
}

(function initExercise4() {
    window.addEventListener('load', createCanvas);
})();
