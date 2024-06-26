document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('valid-form');
    const campoA = document.getElementById('CampoA');
    const campoB = document.getElementById('CampoB');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    function validarFormulario() {
        const valorCampoA = parseFloat(campoA.value);
        const valorCampoB = parseFloat(campoB.value);

        if (!(valorCampoA) || !(valorCampoB)) {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return false;
        }

        if ((valorCampoB) > (valorCampoA)) {
            errorMessage.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validarFormulario();
    });
    
    campoA.addEventListener('input', function() {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    });

    campoB.addEventListener('input', function() {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    });
    

});
