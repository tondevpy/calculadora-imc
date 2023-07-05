let erroMensagem = document.getElementById('retornoErro');
let muitoAbaixo = document.getElementById('muitoAbaixo');
let abaixo = document.getElementById('abaixo');
let normal = document.getElementById('normal');
let acima = document.getElementById('acima');

let form = document.getElementById('form-calculo-imc');

function calcular() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    if (peso !== '' && altura !== '') {
        altura = altura.replace(',', '.');

        let imc = peso / (altura * altura);

        if (imc < 17) {
            muitoAbaixo.style.color = 'red';
            acima.style.color = 'rgb(88, 88, 88)';
            abaixo.style.color = 'rgb(88, 88, 88)';
            normal.style.color = 'rgb(88, 88, 88)';
            erroMensagem.innerText = '';
        }
        else if (imc >= 17 && imc <= 18.50) {
            abaixo.style.color = '#F97070';
            acima.style.color = 'rgb(88, 88, 88)';
            normal.style.color = 'rgb(88, 88, 88)';
            muitoAbaixo.style.color = 'rgb(88, 88, 88)';
            erroMensagem.innerText = '';
        }
        else if (imc >= 18.5 && imc <= 24.99) {
            normal.style.color = 'green';
            acima.style.color = 'rgb(88, 88, 88)';
            abaixo.style.color = 'rgb(88, 88, 88)';
            muitoAbaixo.style.color = 'rgb(88, 88, 88)';
            erroMensagem.innerText = '';
        } else {
            acima.style.color = 'red';
            normal.style.color = 'rgb(88, 88, 88)';
            abaixo.style.color = 'rgb(88, 88, 88)';
            muitoAbaixo.style.color = 'rgb(88, 88, 88)';
            erroMensagem.innerText = '';
        }
    } else {
        erroMensagem.innerText = 'Favor preencha os campos de peso e altura corretamente';
        erroMensagem.style.color = 'red';
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    calcular();
    return false;
});
