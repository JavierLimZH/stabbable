function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

addStyle(`
.skiptab {
    transform: scale(0);
    transition: all .1s ease-in-out;
}

.skiptab:focus {
    transform: scale(1);
}
`)

let skiptab = document.getElementsByClassName("skiptab")[0]

skiptab.addEventListener("click", () => {
    const keyboardfocusableElements = [...document.querySelectorAll(
  'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
)]
  .filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
  console.log(keyboardfocusableElements);

    for (let i = 0; i < keyboardfocusableElements.length; i++) {
        let elem = keyboardfocusableElements[i];
        if (!elem.hasAttribute("s-tabbable")) {
            elem.setAttribute("tabindex", -1);
        } 
        let ind = elem.getAttribute("s-tabbable");
        if (typeof ind == "boolean") {
            elem.setAttribute("tabindex", 0);
        } else if (typeof ind == "number") {
            elem.setAttribute("tabindex", Number.parseInt(ind));
        }
        
    };
});