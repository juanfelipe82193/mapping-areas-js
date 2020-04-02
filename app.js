let setUpTooltip = function () {
    let tooltip = "";
    let tooltipElements = document.querySelectorAll('.hover-reveal');
    let tooltipDiv = document.querySelector('.div-tooltip');
    let timer;
    // console.log(tooltipElements);

    let displayTooltip = function (e, object) {
        // console.log(object);
        tooltip = object.dataset.tooltip;
        tooltipDiv.innerHTML = tooltip;
        tooltipDiv.style.top = (e.pageY - 50) + "px";
        tooltipDiv.style.left = (e.pageX + 100) + "px";
        // tooltipDiv.style.opacity = 1;
        fadeIn(tooltipDiv)
    };

    let fadeOut = function (element) {
        let op = 1;
        if (!timer) {
            timer = setInterval(function () {
                if (op <= 0.1) {
                    clearInterval(timer);
                    timer = null;
                    element.style.opacity = 0;
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                op -= op * 0.1; 
            }, 10);
        }
    };

    let fadeIn = function (element) {
        let op = 1;
        element.style.display = 'block';
        let timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            op += op * 0.1;
        }, 10);
    };

    tooltipElements.forEach(function (elem) {
        let timeout;
        elem.addEventListener('mouseenter', function (e) {
            // console.log('Mose hover');
            let that = this;
            timeout = setTimeout(() => {
                displayTooltip(e, that);
            }, 400);
        });
        elem.addEventListener('mouseleave', function (e) {
            // tooltipDiv.style.opacity = 0;
            clearTimeout(timeout)
            fadeOut(tooltipDiv);
        });
    });
};

setUpTooltip();