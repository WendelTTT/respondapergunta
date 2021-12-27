// função para enviar respostas diferentes para o corpo do html por meio de prompt


let editorPergunta;
let resposta; 

// Declaração de funções

function pergunta01 (){
editorPergunta = 'Em que ano nasceu a primeira criança do século XXI?';
resposta = 2001;
};

function pergunta02 (){
editorPergunta = 'Qual o país cuja a capital tem o nome de um carro?';
resposta = 'Brasília';
}

// aleatórios e confirmação

let aleatório = Math.round(Math.random()*(2-1)+1);


let confirma = window.confirm('Se deseja realmente responder estas perguntas, clique em ok',1);

if (confirma == true){
    alert('Boa sorte!');
}   
else if (confirma != true) {
    alert('Vai com Deus!');
    aleatório = 0; 
    aleatório02 = 0;
    aleatório03 = 0;       
}



let aleatório03 = Math.round(Math.random()*(4-2)+2);
let respostasCertaList = ['','','Parabéns Einstein, acertou!', 'Pura sorte, acertou!', 'Deve ter colado, acertou!', 'Anda estudando? Você acertou!'];
let respostaCerta = respostasCertaList[aleatório03];


let aleatório02 = Math.round(Math.random()*(4-2)+2);
let respostasErradasList = ['','','Puta a merda, errou!', 'Errou rude, errou feio!', 'Caralho, errou porra!', 'Filho da puta, você errou!'];
let respostaErrada = respostasErradasList[aleatório02];


// Sorteio das perguntas

if (aleatório ==1){
    result = pergunta01();
}

else if (aleatório ==2){
    result = pergunta02();
} 


let pergunta = prompt(`${editorPergunta}`);
let recebe = document.getElementById ('deu-certo');


if (pergunta == resposta) {
    result = recebe.innerHTML = (respostaCerta);


} else if (pergunta != resposta) {
    result = recebe.innerHTML = (respostaErrada);
    
 }

 