document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    const name  = document.getElementById("username").value;

    const firstL = name.slice(0,1).toUpperCase();
    const remaining = name.slice(1, name.length);

    const confirm = firstL + remaining

    document.querySelector(".nameoftheuser").innerHTML = confirm + "❤️";
    document.querySelector("#message").style.color = "white";
    // document.querySelector(".container").style.background = "linear-gradient(#9276CA, #4A2C87)";
    document.querySelector(".form").classList.add("hidden");
    document.querySelector("h1").classList.add("hidden");
    document.querySelector("#message").classList.remove("hidden");
 

});


