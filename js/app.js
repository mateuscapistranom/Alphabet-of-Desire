// Função para eliminar letras repetidas e encontrar as menos repetidas
function eliminateRepeated(desire) {
    // Remove espaços e transforma em minúsculas
    let letters = desire.toLowerCase().replace(/\s+/g, '').split('');
    let letterCount = {};

    // Contar a frequência de cada letra
    letters.forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    });

    // Obter letras únicas
    let uniqueLetters = Object.keys(letterCount);

    // Filtrar letras que aparecem apenas uma vez
    let nonRepeatedLetters = uniqueLetters.filter(letter => letterCount[letter] === 1);

    // Se todas as letras se repetem, encontrar as menos repetidas
    if (nonRepeatedLetters.length === 0) {
        let minRepetition = Math.min(...Object.values(letterCount));
        nonRepeatedLetters = uniqueLetters.filter(letter => letterCount[letter] === minRepetition);
    }

    // Embaralhar as letras
    nonRepeatedLetters = nonRepeatedLetters.sort(() => Math.random() - 0.5);

    return nonRepeatedLetters.join('');
}

// Função para exibir o resultado no HTML
function generateResult() {
    let desire = document.getElementById("desire").value;
    if (desire.trim() !== "") {
        let result = eliminateRepeated(desire);
        document.getElementById("sigilResult").innerText = `Result: ${result}`;
    } else {
        document.getElementById("sigilResult").innerText = "Please enter a desire.";
    }
}