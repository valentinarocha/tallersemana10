document.addEventListener('DOMContentLoaded', ()  => {
    const inputDato = document.getElementById('inputText');
    const buttonSave = document.getElementById('buttonText');

    buttonSave.addEventListener('click', () => {
     const dato = inputDato.value;
     localStorage.setItem('dato', dato);    

     inputDato.value = '';
    });
});

