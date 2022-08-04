export function soundsFunctions() { 
    let bgAudio;
    const alarmAudio = new Audio("audios/Alarm.wav");

    function defineBgAudio(button) {
        switch(button.id) {
            case "forest":
                bgAudio = new Audio("audios/Floresta.wav");
                break;
    
            case "rain":
                bgAudio = new Audio("audios/Chuva.wav");
                break;
    
            case "coffee":
                bgAudio = new Audio("audios/Cafeteria.wav");
                break;
    
            case "fireplace":
                bgAudio = new Audio("audios/Lareira.wav");
                break;
        }
    }

    function playBgAudio(button) {
        let soundsElements = document.getElementById("sounds");
        let buttons = soundsElements.querySelectorAll('button');
        
        buttons.forEach((button) => {
            button.children[1].value = 50;
        });

        if (bgAudio !== undefined) {
            bgAudio.pause();
        }

        if (button.classList.contains('btn-active')) {
            defineBgAudio(button);
            bgAudio.play();
            bgAudio.loop = true;
            bgAudio.volume = .5;
        } else {
            bgAudio.pause();
        }
    }
    
    function AlarmAudio() {
        if (alarmAudio.paused) {
            alarmAudio.loop = true;
            alarmAudio.play();
        } else {
            alarmAudio.pause()
        }
    }

    function changeVolume(slider) {
        let volume = slider.value / 100;
        bgAudio.volume = volume;
    }

    return {
        playBgAudio, 
        AlarmAudio,
        changeVolume
    }
}