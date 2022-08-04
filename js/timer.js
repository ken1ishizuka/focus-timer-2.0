export function timerFunctions({
    minutesPlaceholder,
    displaySeconds,
    inputMinutes,
    formatNumbers,
    timerButtonsBehaviors,
    AlarmAudio,
    popUp
    }){ //Dependencies
 
    let timerStatus = "begin";
    let timerDisplay;
    let minutes;

    function holdInput() {
        if (inputMinutes.value != minutesPlaceholder) {
            minutes = inputMinutes.value;
        } else {
            minutes = minutesPlaceholder;
        }
    }
    
    function countDown() {
        timerDisplay = setTimeout(function() {
            let seconds = Number(displaySeconds.textContent);
            let minutes = inputMinutes.value;
            
            if (minutes <= 0 && seconds == 0) {
                popUp.classList.remove('hide');
                AlarmAudio();
                resetTimer();
                timerButtonsBehaviors();
                return;
            }

            if (seconds <= 0) {
                seconds = 60;
                --minutes
            };

            formatNumbers(minutes, --seconds);
            countDown();
        }, 1000);

        timerStatus = "playing";
        timerButtonsBehaviors(timerStatus);
    }

    function pauseTimer() {
        clearTimeout(timerDisplay);
        timerStatus = "paused";
        timerButtonsBehaviors(timerStatus);
    }

    function resetTimer() {
        clearTimeout(timerDisplay);
        formatNumbers(minutes, 0);
        timerStatus = "begin";
        timerButtonsBehaviors(timerStatus);
    }

    return {
        countDown,
        pauseTimer,
        resetTimer,
        holdInput
    }
}