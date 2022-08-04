export function themeColorMode({
    btnLightMode,
    btnDarkMode
    }) {

    function toggleThemeColor() {

        document.body.classList.toggle("dark-mode");

        btnLightMode.classList.toggle('hide');
        btnDarkMode.classList.toggle('hide');
  }

    return {
        toggleThemeColor,
    }
}
