"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 02',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 03',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('items');
    let currentKey = null; // Guardar el ítem seleccionado

    if (select) {
        select.value = "-1";
        // Llenar el select con los nombres y la clave como value
        Object.entries(itemData).forEach(([key, item]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = item.name;
            select.appendChild(option);
        });

        // Mostrar datos al seleccionar una opción
        select.addEventListener('change', function() {
            const selectedKey = select.value;
            const item = itemData[selectedKey];
            if (item) {
                document.getElementById('displayImage').src = item.image;
                document.getElementById('photographer').value = item.photographer;
                document.getElementById('description').value = item.description;
                document.getElementById('score').value = item.score;
                currentKey = selectedKey; // Guardar el ítem seleccionado
            }
        });
    }

    // Manejar los botones de voto
    document.getElementById('increaseScore').addEventListener('click', function() {
        if (currentKey && itemData[currentKey]) {
            itemData[currentKey].score++;
            document.getElementById('score').value = itemData[currentKey].score;
        }
    });

    document.getElementById('decreaseScore').addEventListener('click', function() {
        if (currentKey && itemData[currentKey]) {
            itemData[currentKey].score--;
            document.getElementById('score').value = itemData[currentKey].score;
        }
    });
});