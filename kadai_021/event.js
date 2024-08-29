const Btn = document.getElementById('btn');

const Txt = document.getElementById('text');

Btn.addEventListener('click', () => {
    setTimeout(() => {
        Txt.textContent = 'ボタンをクリックしました';
    }, 2000);
});