let selectedLevel = '';
let selectedGoal = '';
let selectedDays = 0;

// Función para pasar a la pantalla de selección de nivel desde la pantalla de bienvenida
function goToNextScreen() {
    showScreen('level-screen');
}

function showScreen(screenId) {
    const currentScreen = document.querySelector('.screen.active');
    const newScreen = document.getElementById(screenId);

    if (currentScreen && currentScreen !== newScreen) {
        // Aplica la animación de salida a la pantalla actual
        currentScreen.classList.add('fade-out');

        // Espera el tiempo de animación de salida antes de ocultar la pantalla actual
        setTimeout(() => {
            currentScreen.classList.remove('active', 'fade-out');
            currentScreen.classList.add('hidden');

            // Muestra la nueva pantalla después de ocultar la anterior
            newScreen.classList.remove('hidden');
            newScreen.classList.add('fade-in', 'active');
        }, 500); // Tiempo de animación de salida
    } else {
        // Si no hay pantalla actual activa, simplemente muestra la nueva pantalla
        newScreen.classList.remove('hidden');
        newScreen.classList.add('fade-in', 'active');
    }
}

function selectLevel(level) {
    selectedLevel = level;
    showScreen('goal-screen');
}

function selectGoal(goal) {
    selectedGoal = goal;
    showScreen('days-screen');
}

function selectDays(days) {
    selectedDays = days;
    displayRoutine();
    showScreen('routine-screen');
}

function displayRoutine() {
    const routineTitle = document.getElementById('routine-title');
    const routineDescription = document.getElementById('routine-description');

    let routine = `Rutina para ${selectedLevel}, objetivo: ${selectedGoal}, entrenando ${selectedDays} días a la semana.`;
    routineTitle.textContent = 'Rutina Personalizada';
    routineDescription.textContent = routine;
}
