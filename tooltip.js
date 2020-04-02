var tooltip = document.querySelectorAll('.hover-reveal');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = (e.pageX + 100) + 'px';
        tooltip[i].style.top = (e.pageY - 50) + 'px';
        tooltip[i].style.display = 'block';
        console.log(tooltip[i]);
        
    }
}