function shoutBackValue() {
    const shoutMessage = document.getElementById("shout").value;
    document.querySelector("#responseShout").innerText = shoutMessage.toUpperCase();
}



window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    shoutBackValue();
    document.querySelector("#Response").removeAttribute("class");
  }
}
