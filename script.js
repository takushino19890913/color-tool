window.addEventListener('DOMContentLoaded', (event) => {
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const brightnessInput = document.getElementById('brightness');
    const alphaInput = document.getElementById('alpha');
    const colorDisplay = document.getElementById('color-display');
    const bgImageInput = document.getElementById('bg-image');
    let bgImageUrl = ''; // 背景画像のURLを保持するグローバル変数

function updateColor() {
    const r = redInput.value;
    const g = greenInput.value;
    const b = blueInput.value;
    const a = 1 - alphaInput.value; // 透明度を反転
    const brightness = brightnessInput.value;

    const rgb = `rgb(${r * brightness}, ${g * brightness}, ${b * brightness})`;
    const rgba = `rgba(${r * brightness}, ${g * brightness}, ${b * brightness}, ${a})`;
    colorDisplay.style.background = `linear-gradient(${rgba}, ${rgba}), url(${bgImageUrl})`; // 背景色と背景画像を同時に設定
}

function handleImageUpload(event) {
    const files = event.target.files;
    if (FileReader && files && files.length) {
        const fr = new FileReader();
        fr.onload = function () {
            bgImageUrl = fr.result; // 背景画像のURLを更新
            updateColor(); // 背景色と背景画像を更新
        }
        fr.readAsDataURL(files[0]);
    }
}
    redInput.addEventListener('input', updateColor);
    greenInput.addEventListener('input', updateColor);
    blueInput.addEventListener('input', updateColor);
    brightnessInput.addEventListener('input', updateColor);
    alphaInput.addEventListener('input', updateColor);
    bgImageInput.addEventListener('change', handleImageUpload);

    // 初期色の設定
    updateColor();
});
