const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');

const GAME_CONFIG = {
    width: 400,
    height: 400,
    boxWidth: 300,
    boxHeight: 40,
    fallSpeed: 1,
    camera: {
        x: 0,
        y: 0,
        width: GAME_CONFIG.width,
        height: GAME_CONFIG.height,
    }
};


const MODES =  {
    falling: 'caer',
    stop: 'detenido',
}
canvas.width = GAME_CONFIG.width;
canvas.height = GAME_CONFIG.height;

// Inicializa las pilas para contener cajas
const stacks = [];

// Función para crear una nueva caja
const createBox = (yPosition) => {
    return {
        x: (GAME_CONFIG.width - GAME_CONFIG.boxWidth) / 2,
        y: yPosition,
        width: GAME_CONFIG.boxWidth,
        height: GAME_CONFIG.boxHeight,
        mode: MODES.falling,
    };
};

// Agrega la primera caja que caerá
stacks.push(createBox(0));

// Función para dibujar una caja
const drawBox = function (box) {
    ctx.fillStyle = 'white';
    
    // Actualiza la posición y según el modo
    if (box.mode === MODES.falling) {
        box.y += GAME_CONFIG.fallSpeed; // Mueve hacia abajo
    }

    // Dibuja la caja en la posición actual
    ctx.fillRect(box.x, box.y, box.width, box.height);
    if (box.mode === MODES.stop) return
    
    // Verficiar el pasicion de la caja anterior nuevo suelo
    const newGround = GAME_CONFIG.height - stacks.length * box.height


    // Verifica la condición de límite
    if (box.y + box.height >= newGround) {
        box.y = newGround; // Ajusta al fondo
        box.mode = MODES.stop; // Cambia a modo DETENIDO
        stacks.push(createBox(10));
    }
};

// Función para animar el tablero
const animate = function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas antes de redibujar
    let totalHeight = 0;

    // Dibuja cada caja
    for (let i = 0; i < stacks.length; i++) {
        const box = stacks[i];
        drawBox(box); // Dibuja cada caja

        if (box.mode === 'stop') {
            continue; // Salta a la siguiente caja si es detenida
        }

        // Actualiza la altura total de las cajas apiladas
        totalHeight += box.height;
    }

    // Verifica si se debe agregar una nueva caja
    if (stacks[stacks.length - 1].mode === 'stop' && stacks.length * GAME_CONFIG.boxHeight < GAME_CONFIG.height) {
        stacks.push(createBox(0)); // Crea una nueva caja en la parte superior
    }

    requestAnimationFrame(animate); // Llama a animate para el siguiente cuadro
    if (stacks[stacks.length - 1].mode === MODES.stop) return
};

// Comienza la animación
animate();
