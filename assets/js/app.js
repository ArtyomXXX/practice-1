let open_modal = document.getElementById('open');
let close_modal = document.getElementById('close');
let modal = document.getElementsByClassName('modal');

modal.onclick = function(event) {
    if (event.target == close_modal) {
        open_modal.style.display = "none";
    }
}