const inputMinutes = document.querySelector('#input-minutes');
const displaySeconds = document.querySelector('#display-seconds');

const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnAddTime = document.querySelector('.add');
const btnSubtractTime = document.querySelector('.subtract');

const btnAudioForest = document.querySelector('#forest');
const btnAudioRain = document.querySelector('#rain');
const btnAudioCoffee = document.querySelector('#coffee');
const btnAudioFireplace = document.querySelector('#fireplace');
const sliderAudioForest = document.querySelector("#forestVolumeSlider");
const sliderAudioRain = document.querySelector("#rainVolumeSlider");
const sliderAudioCoffee = document.querySelector("#coffeeVolumeSlider");
const sliderAudioFireplace = document.querySelector("#fireplaceVolumeSlider");

const minutesPlaceholder = Number(inputMinutes.placeholder);

const btnToggleTheme = document.querySelector(".btn-toggle-theme");
const btnLightMode = document.querySelector(".light-mode");
const btnDarkMode = document.querySelector(".dark-mode")

const popUp = document.querySelector('.endTime');
const btnPopUpStopTimer = document.querySelector('.stopTimer');
const btnPopUpRestartTimer = document.querySelector('.restartTimer');

export {
    inputMinutes,
    displaySeconds,
    btnPlay,
    btnPause,
    btnStop,
    btnAddTime,
    btnSubtractTime,
    minutesPlaceholder,
    btnAudioForest,
    btnAudioRain,
    btnAudioCoffee,
    btnAudioFireplace,
    popUp,
    btnPopUpStopTimer,
    btnPopUpRestartTimer,
    sliderAudioForest,
    sliderAudioRain,
    sliderAudioCoffee,
    sliderAudioFireplace,
    btnToggleTheme,
    btnLightMode,
    btnDarkMode
};