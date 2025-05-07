const username = "yoanmln";
const url = `https://api.github.com/users/${username}/events`;

fetch(url)
  .then((res) => {
    console.log(res);
    res.json();
  })
  .then((events) => {
    const push = events.find((e) => e.type === "PushEvent");
    if (push) {
      const commit = push.payload.commits[0];
      const repo = push.repo.name;
      const msg = commit.message;
      document.getElementById("github-activity").innerHTML = `
      <div class = "github-header">
      <i class="fa-solid fa-code-fork"></i>
      <h4>GitHub Activity</4>
      
      </div
      <h5>Dernier commit sur le repo de <strong>${repo}</strong> :</h5>
        <p><em>"${msg}"</em></p>
      `;
    } else {
      document.getElementById("github-activity").innerText =
        "Pas d'activité récente visible.";
    }
  })
  .catch(() => {
    document.getElementById("github-activity").innerHTML = `
      <p> Erreur 403 API GitHub introuvable...🤡 <br> (Probablement une pause café)☕️
      </p> 
      
      <p class="git-error" > En attendant, tu peux voir mon activité GitHub en cliquant ici : </p>
        <a class="git-link"  href="https://github.com/YoanMln" target="_blank" class="icon-link">
    <i class="fa-brands fa-github fa-2x btn-bounce" style="color: #37afe1"></i>
  </a>`;
  });
