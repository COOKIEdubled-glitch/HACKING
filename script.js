let progress = document.getElementById('progress');
let dataText = document.getElementById('data');

let value = 0;

let interval = setInterval(() => {
    value += 1;
    progress.value = value;
    dataText.innerHTML = `Collecte de vos données en cours... ${value}%`;

    if (value === 100) {
        clearInterval(interval);
        setTimeout(() => {
            alert('Opération réussie!');
            dataText.innerHTML = 'Données collectées avec succès.';
        }, 500);
    }
}, 100); // 100 ms pour chaque incrément de la barre
