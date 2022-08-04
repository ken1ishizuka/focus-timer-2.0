export function inputFunctions({
    minutesPlaceholder,
    inputMinutes,
    displaySeconds,
    }) {

    // Convert placeholder to number
    function convertPlaceholder() {
        inputMinutes.value = minutesPlaceholder;
    }

    // Clear input
    function clearInput() {
        inputMinutes.value = "";
        inputMinutes.placeholder = "";
    }

    // Check if input is bigger than 60 
    function isGreaterThanSixty(input) {
        if (input > 60) {
            return 60;
        } else {
            if (input < 0) {
                return 0;
            } else {
                return input;
            }  
        }
    }

    // Format numbers to 00
    function formatNumbers(minutes, seconds) {
        let validatedNumber = Number(isGreaterThanSixty(minutes));

        if (validatedNumber >= 0 && validatedNumber < 10) {
            inputMinutes.value = String(validatedNumber).padStart(2, "0");
        } else {
            inputMinutes.value = validatedNumber;
        }

        displaySeconds.textContent = String(seconds).padStart(2, "0");
    }

    return {
        convertPlaceholder,
        clearInput,
        isGreaterThanSixty,
        formatNumbers
    }
}

