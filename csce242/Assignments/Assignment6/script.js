// Color Slider
document.getElementById('slider').oninput = updateBackgroundColor;

function updateBackgroundColor(e) {
    const value = e.target.value;
    const Color = `rgb(${value}, 0, 0)`;
    document.getElementById('color-slider').style.backgroundColor = Color;
}
updateBackgroundColor({ target: { value: 0 } });

// Show Picture Function

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#sizer-header button');
    const picture = document.getElementById('picture');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const size = button.getAttribute('data-size');

            let url = '';
            if (size === 'small') {
                url = 'https://picsum.photos/200';
            } else if (size === 'medium') {
                url = 'https://picsum.photos/500';
            } else if (size === 'large') {
                url = 'https://picsum.photos/800';
            }

            picture.src = url;
        });
    });
});
