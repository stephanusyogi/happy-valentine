let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let showPasswordButton = document.querySelector(".password-button");
let face = document.querySelector(".face");

passwordInput.addEventListener("focus", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.add("hide");
  });
  document.querySelector(".tongue").classList.remove("breath");
});

passwordInput.addEventListener("blur", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });
  document.querySelector(".tongue").classList.add("breath");
});

usernameInput.addEventListener("focus", (event) => {
  let length = Math.min(usernameInput.value.length - 16, 19);
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });

  face.style.setProperty("--rotate-head", `${-length}deg`);
});

usernameInput.addEventListener("blur", (event) => {
  face.style.setProperty("--rotate-head", "0deg");
});

usernameInput.addEventListener(
  "input",
  _.throttle((event) => {
    let length = Math.min(event.target.value.length - 16, 19);

    face.style.setProperty("--rotate-head", `${-length}deg`);
  }, 100)
);

document.querySelector(".login-button").addEventListener("click", function () {
  var username = document.getElementById("username").value.trim().toLowerCase();
  var password = document.getElementById("password").value.trim().toLowerCase();

  if (username === "" || password === "") {
    Swal.fire({
      icon: "error",
      title: "Isi semuanyaaa!! &#128545;",
      confirmButtonText: "Okee lanjuutt ngisiii",
    });
  } else {
    if (
      username === "stephanus pradipta yogi setiawan" &&
      password === "ratu"
    ) {
      Swal.fire({
        icon: "success",
        title: "Ciee Cantiknya Mas Bener Semuaa &#128525; &#128525;",
        text: "Jangan kemana-mana dulu yaa! Ada halaman selanjutnya",
        confirmButtonText: "Okee lanjutt sayangg",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "question/index.html";
        }
      });
    } else if (username !== "stephanus pradipta yogi setiawan") {
      Swal.fire({
        icon: "error",
        title:
          "Dih nama lengkap pacarnya ngga tau &#128534; &#128546; &#128545;",
        text: "Coba lagii yaaa",
        confirmButtonText: "Okee lanjuutt ngisiii",
      });
    } else if (password !== "ratu") {
      Swal.fire({
        icon: "error",
        title: "Hayoo ini sapaa?!!? &#128545;",
        text: "Coba lagii yaaa",
        confirmButtonText: "Okee lanjuutt ngisiii",
      });
    }
  }
});
