export function eventsFunctions({
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
}) {

    inputMinutes.addEventListener('focus', ()=> {
        input.clearInput();
        controls.timerButtonsBehaviors();
    });
    
    inputMinutes.addEventListener('input', ()=> {
        input.formatNumbers(inputMinutes.value, displaySeconds.textContent);
        controls.timerButtonsBehaviors();
    });
    
    btnPlay.addEventListener('click', () => {
        timer.holdInput();
        timer.countDown();
    })
    
    btnPause.addEventListener('click', () => {
        timer.pauseTimer();
    })
    
    btnStop.addEventListener('click', () => {
        timer.resetTimer();
    })
    
    btnAddTime.addEventListener('click', () => {
        controls.AddOrSubtract(btnAddTime)
    });
    
    btnSubtractTime.addEventListener('click', () => {
        controls.AddOrSubtract(btnSubtractTime)
    });
    
    btnAudioForest.addEventListener('click', () => {
        controls.defineActiveSound(btnAudioForest);
        controls.enableSoundSliders(btnAudioForest);
        sounds.playBgAudio(btnAudioForest);
    });
    
    btnAudioRain.addEventListener('click', () => {
        controls.defineActiveSound(btnAudioRain);
        controls.enableSoundSliders(btnAudioRain);
        sounds.playBgAudio(btnAudioRain);
    });
    
    btnAudioCoffee.addEventListener('click', () => {
        controls.defineActiveSound(btnAudioCoffee);
        controls.enableSoundSliders(btnAudioCoffee);
        sounds.playBgAudio(btnAudioCoffee);
    });
    
    btnAudioFireplace.addEventListener('click', () => {
        controls.defineActiveSound(btnAudioFireplace);
        controls.enableSoundSliders(btnAudioFireplace);
        sounds.playBgAudio(btnAudioFireplace);
    });

    btnPopUpStopTimer.addEventListener('click', () => {
        sounds.AlarmAudio();
        popUp.classList.add('hide');
    });

    btnPopUpRestartTimer.addEventListener('click', () => {
        sounds.AlarmAudio();
        popUp.classList.add('hide');
        timer.countDown();
    });

    sliderAudioForest.addEventListener('change', () => {
        sounds.changeVolume(sliderAudioForest);
    });

    sliderAudioRain.addEventListener('change', () => {
        sounds.changeVolume(sliderAudioRain);
    });

    sliderAudioCoffee.addEventListener('change', () => {
        sounds.changeVolume(sliderAudioCoffee);
    });

    sliderAudioFireplace.addEventListener('change', () => {
        sounds.changeVolume(sliderAudioFireplace);
    });

    sliderAudioForest.addEventListener('click', event => {
        event.stopPropagation();
    });

    sliderAudioRain.addEventListener('click', event => {
        event.stopPropagation();
    });

    sliderAudioCoffee.addEventListener('click', event => {
        event.stopPropagation();
    });

    sliderAudioFireplace.addEventListener('click', event => {
        event.stopPropagation();
    });

    btnToggleTheme.addEventListener('click', colorTheme.toggleThemeColor);
}
