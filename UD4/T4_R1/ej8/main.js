function replaceAmpersand() {
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            input.value = input.value.replace(/&/g, 'and');
        });
    });
}

(function initExercise8() {
    window.addEventListener('load', replaceAmpersand);
})();
