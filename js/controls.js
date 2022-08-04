export function controlsFunctions({
    inputMinutes,
    btnPlay,
    btnPause,
    btnStop,
    btnAddTime,
    btnSubtractTime,
    formatNumbers,
    }) { //Dependencies

    function timerButtonsBehaviors(timerStatus) {
        // Time rules
        let minutes = inputMinutes.value;
        
        if (minutes == 0 || minutes.length == 0) {
            btnPlay.disabled = true;
            btnStop.disabled = true;
            btnSubtractTime.disabled = true;
        } else {
            btnPlay.disabled = false;
            btnSubtractTime.disabled = false; 
        }
    
        if (minutes >= 60) {
            btnAddTime.disabled = true;
        } else {
            btnAddTime.disabled = false;
        }

        switch(timerStatus) {
            case "begin":
                btnPlay.classList.remove('hide');
                btnPause.classList.add('hide');
                btnStop.disabled = true;
                inputMinutes.disabled = false;
                break;
    
            case "playing":
                btnPlay.classList.add('hide');
                btnPause.classList.remove('hide');
    
                btnStop.disabled = false;
                btnAddTime.disabled = true;
                btnSubtractTime.disabled = true;
                inputMinutes.disabled = true;
                break;
    
            case "paused":
                btnPlay.classList.remove('hide');
                btnPause.classList.add('hide');
    
                btnStop.disabled = false;
                btnAddTime.disabled = true;
                btnSubtractTime.disabled = true;
                inputMinutes.disabled = true;
                break;
        }
    }
    
    // ADD AND SUBTRACT TIME
    function AddOrSubtract(input) {
        let minutes = inputMinutes.value;

        if (input.classList.contains('add')) {
            formatNumbers(Number(minutes) + 5, 0);
        } else if (input.classList.contains('subtract')) {
            formatNumbers(Number(minutes) - 5, 0);
        }

        timerButtonsBehaviors();
    }

    // SOUNDS
    function defineActiveSound(audioButton) {
        let soundsElements = document.getElementById("sounds");
        let buttons = soundsElements.querySelectorAll('button');

        if (audioButton.classList.contains('btn-active')) {
            audioButton.classList.remove('btn-active');
        } else {
            buttons.forEach((button) => {
                button.classList.remove('btn-active');
            });
            
            audioButton.classList.add('btn-active');
        };
    }

    function enableSoundSliders(audioButton) {
        if (audioButton.classList.contains('btn-active')) {
            audioButton.children[1].disabled = false;
            audioButton.children[1].value = 50;
        }
    }

    return {
        timerButtonsBehaviors,
        AddOrSubtract,
        defineActiveSound,
        enableSoundSliders
    } 
}


