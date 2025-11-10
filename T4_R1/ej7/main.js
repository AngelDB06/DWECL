function setupForm() {
    var form = document.createElement('form');
    var fields = [
        {type:'text', name:'nombre', placeholder:'Nombre'},
        {type:'email', name:'correo', placeholder:'Correo'},
        {type:'textarea', name:'comentario', placeholder:'Comentario'}
    ];

    fields.forEach(f => {
        var input;
        if (f.type === 'textarea') input = document.createElement('textarea');
        else input = document.createElement('input');
        input.name = f.name;
        input.placeholder = f.placeholder;
        input.addEventListener('focus', () => showHelp('Introduce ' + f.name));
        input.addEventListener('blur', () => hideHelp());
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    var sendBtn = document.createElement('button');
    sendBtn.type = 'submit';
    sendBtn.innerText = 'Enviar';
    sendBtn.addEventListener('focus', () => showHelp('Enviar formulario'));
    sendBtn.addEventListener('blur', () => hideHelp());

    var resetBtn = document.createElement('button');
    resetBtn.type = 'reset';
    resetBtn.innerText = 'Resetear';
    resetBtn.addEventListener('focus', () => showHelp('Borrar campos'));
    resetBtn.addEventListener('blur', () => hideHelp());

    form.appendChild(sendBtn);
    form.appendChild(resetBtn);

    var help = document.createElement('div');
    help.id = 'helpMessage';
    document.body.appendChild(help);
    document.body.appendChild(form);
}

function showHelp(msg) {
    var help = document.getElementById('helpMessage');
    help.innerText = msg;
}

function hideHelp() {
    var help = document.getElementById('helpMessage');
    help.innerText = '';
}

(function initExercise7() {
    window.addEventListener('load', setupForm);
})();
