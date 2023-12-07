/* Declare and initialize global variabiles*/
const teamsElement = document.getElementById("teams");
let teamList = {};

const displayTeams = (teams) =>
{
    teams.forEach(team => {
        let article = document.createElement("article");
        
        let h3 = document.createElement("h3");
        h3.textContent = team.teamName;


        let motive = document.createElement("p");
        motive.textContent = team.motive;


        let first = document.createElement("p");
        first.textContext = team.firstAppearance;

        let img = document.createElement("img");
        img.src = team.imgUrl;
        img.alt = team.teamName;

        article.appendChild(h3);
        article.appendChild(motive);
        article.appendChild(first);
        article.appendChild(img);

        teamsElement.appendChild(article);
    });
};

// getTeams Function uising Fetch
const getTeams = async () => {
  const response = await fetch("https://mholmes755.github.io/CSE121B/finalProject/theMarvelRoster.json");
  teamList = await response.json();
  displayTeams(teamList);
}


getTeams();

