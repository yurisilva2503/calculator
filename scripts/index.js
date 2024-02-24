document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input-values");

    document.querySelectorAll(".btn-calculator").forEach(item => {
        item.addEventListener("click", function() {
            if (this.textContent === '=') {
                input.value = eval(input.value);
            } else if (this.textContent === 'C') {
                input.value = '';
            } else {
                input.value += this.textContent;
            }
        });
    });
});
