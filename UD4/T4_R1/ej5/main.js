function createCanvasWithErase() {
    var rows = 10, cols = 10;
    var container = document.createElement('div');
    var table = document.createElement('table');
    table.id = 'canvasTable2';
    for (var r = 0; r < rows; r++) {
        var tr = document.createElement('tr');
        for (var c = 0; c < cols; c++) {
            var td = document.createElement('td');
            td.dataset.r = r;
            td.dataset.c = c;
            td.addEventListener('mousemove', paintOrEraseCell);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    var clearBtn = document.createElement('button');
    clearBtn.innerText = 'Borrar todo';
    clearBtn.addEventListener('click', clearCanvas);
    container.appendChild(clearBtn);
    container.appendChild(table);
    document.body.appendChild(container);
}

function paintOrEraseCell(e) {
    if ((e.buttons & 1) !== 0) {
        if (e.ctrlKey) e.target.style.backgroundColor = 'red';
        else if (e.shiftKey) e.target.style.backgroundColor = 'blue';
    }
    if ((e.buttons & 2) !== 0) {
        e.target.style.backgroundColor = '';
    }
}

function clearCanvas() {
    var cells = document.querySelectorAll('#canvasTable2 td');
    cells.forEach(td => td.style.backgroundColor = '');
}

(function initExercise5() {
    window.addEventListener('load', createCanvasWithErase);
})();
