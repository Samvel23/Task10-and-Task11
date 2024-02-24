(function(window, document, undefined) {
    const myInput = document.querySelector('input');
    const btn = document.querySelector(".btn");
    
    btn.addEventListener('click', () => {
        const inputValue = myInput.value;
        if(inputValue.trim() == '') {
            alert('Please enter a value');
        } else if(!isValidEmail(inputValue)) {
            alert('Please enter a valid email');
        }
    });
    function isValidEmail(inputValue) {
        const valids = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return valids.test(inputValue)
    }
})(window, document);