let selectedLevel = '';
let selectedGoal = '';
let selectedDays = 0;

function goToNextScreen() {
    changeScreen('level-screen');
}

function selectLevel(level) {
    selectedLevel = level;
    changeScreen('goal-screen');
}

function selectGoal(goal) {
    selectedGoal = goal;
    changeScreen('days-screen');
}

function selectDays(days) {
    selectedDays = days;

    // Cuando el usuario selecciona 3 días, muestra la pantalla de selección de días.
    if (selectedDays === 3 && selectedLevel === 'novato' && selectedGoal === 'musculo') {
        changeScreen('select-day-screen1');
    }
}

// Función para navegar a la rutina correcta
function navigateToRoutine() {
    hideAllScreens();

    if (selectedLevel === 'novato' && selectedGoal === 'musculo' && selectedDays === 3) {
        document.getElementById('routine-nov-muscle1-day1').classList.add('active');
    }
    // Aquí puedes agregar más condiciones para otros niveles, objetivos y días
}

// Función para ocultar todas las pantallas
function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
}

// Función para guardar el progreso del ejercicio
function saveProgress(exerciseId) {
    const checkbox = document.getElementById(exerciseId);
    localStorage.setItem(exerciseId, checkbox.checked);
}

// Función para cargar el progreso de los ejercicios
function loadProgress() {
    const exercises = ['exercise1', 'exercise2', 'exercise3', 'exercise4', 'exercise5', 'exercise6', 'exercise7', 'exercise8', 'exercise9', 'exercise10', 'exercise11', 'exercise12', 'exercise13', 'exercise14', 'exercise15']; // IDs de los ejercicios
    exercises.forEach(exerciseId => {
        const checked = localStorage.getItem(exerciseId) === 'true';
        document.getElementById(exerciseId).checked = checked;
    });
}

// Llamar a loadProgress al cargar la página
window.onload = function() {
    loadProgress();
};

function showRoutine(routineId) {
    changeScreen(routineId);
}

function resetProgress(exercises) {
    exercises.forEach(exerciseId => {
        localStorage.removeItem(exerciseId);
        document.getElementById(exerciseId).checked = false;
    });
}

function changeScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goBack(previousScreenId) {
    changeScreen(previousScreenId);
}
