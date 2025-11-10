function setupColorTable() {
    var title = document.createElement('img');
    title.src = 'original.png';
    title.addEventListener('mouseover', () => title.src = 'hover.png');
    title.addEventListener('mouseout', () => title.src = 'original.png');
    document.body.appendChild(title);

    var colors = [
        {hex:'#FF0000', name:'rojo'},
        {hex:'#00FF00', name:'verde'},
        {hex:'#0000FF', name:'azul'},
        {hex:'#FFFF00', name:'amarillo'},
        {hex:'#FF00FF', name:'magenta'},
        {hex:'#00FFFF', name:'cian'},
        {hex:'#000000', name:'negro'},
        {hex:'#FFFFFF', name:'blanco'},
        {hex:'#808080', name:'gris'},
        {hex:'#800000', name:'marrón'},
        {hex:'#008000', name:'verde oscuro'},
        {hex:'#000080', name:'azul oscuro'}
    ];

    var table = document.createElement('table');
    colors.forEach(c => {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = c.hex;
        td.addEventListener('mouseover', () => {
            td.style.backgroundColor = c.hex;
        });
        td.addEventListener('mouseout', () => {
            td.style.backgroundColor = '';
            td.innerText = c.name;
        });
        tr.appendChild(td);
        table.appendChild(tr);
    });
    document.body.appendChild(table);
}

(function initExercise6() {
    window.addEventListener('load', setupColorTable);
})();
