document.addEventListener("DOMContentLoaded", function () {
  var apiUrl = "https:api.github.com/users/Guilu27";
  const avatar = document.querySelector("#avatar");
  const name = document.querySelector("#name");
  const username = document.querySelector("#username");
  const repos = document.querySelector("#repos");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const link = document.querySelector("#link");

  document.getElementById("form-button").addEventListener("click", function () {
    const formUsername = document.getElementById("form-input").value.trim();
    apiUrl = `https:api.github.com/users/${formUsername}`;

    fetch(apiUrl)
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Erro ao buscar recurso");
        }
        return res.json();
      })
      .then(function (json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
      })
      .catch(function (error) {
        alert(
          `O usuário ${formUsername} do GitHub não existe. Por favor, verifique o nome de usuário fornecido e tente novamente.`
        );
      });
  });

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      avatar.src = json.avatar_url;
      name.innerText = json.name;
      username.innerText = json.login;
      repos.innerText = json.public_repos;
      followers.innerText = json.followers;
      following.innerText = json.following;
      link.href = json.html_url;
    });
});
