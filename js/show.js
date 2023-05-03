window.addEventListener("load", () => {
  const name = sessionStorage.getItem("NAME");
  const surname = sessionStorage.getItem("SURNAME");

  document.getElementById("Email").innerHTML = name;
  document.getElementById("result-surname").innerHTML = surname;
});
