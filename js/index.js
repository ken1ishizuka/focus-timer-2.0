import {
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
}
    from "./html-elements.js";

import {soundsFunctions} from "./sounds.js";
import {inputFunctions} from "./inputs.js";
import {controlsFunctions} from "./controls.js";
import {timerFunctions} from "./timer.js";
import {themeColorMode} from "./themeColorMode.js";
import {eventsFunctions} from "./events.js";

const sounds = soundsFunctions();

const input = inputFunctions({
    minutesPlaceholder,
    inputMinutes,
    displaySeconds,
});

input.convertPlaceholder();

const controls = controlsFunctions({
    inputMinutes,
    btnPlay,
    btnPause,
    btnStop,
    btnAddTime,
    btnSubtractTime,
    formatNumbers: input.formatNumbers
});

const timer = timerFunctions({
    minutesPlaceholder,
    displaySeconds,
    inputMinutes,
    formatNumbers: input.formatNumbers,
    timerButtonsBehaviors: controls.timerButtonsBehaviors,
    AlarmAudio: sounds.AlarmAudio,
    popUp
});

const colorTheme = themeColorMode({
    themeColorMode,
    btnToggleTheme,
    btnLightMode,
    btnDarkMode
});

eventsFunctions({
    inputMinutes,
    displaySeconds,
    btnPlay,
    btnPause,
    btnStop,
    btnAddTime,
    btnSubtractTime,
    btnAudioForest,
    btnAudioRain,
    btnAudioCoffee,
    btnAudioFireplace,
    timer,
    input,
    controls,
    sounds,
    popUp,
    btnPopUpStopTimer,
    btnPopUpRestartTimer,
    sliderAudioForest,
    sliderAudioRain,
    sliderAudioCoffee,
    sliderAudioFireplace,
    btnToggleTheme,
    colorTheme,
});



