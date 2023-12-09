/* Declare and initialize global variabiles*/
const teamsElement = document.getElementById("teams");
let teamList = {};
const membersElement = document.getElementById("members");
let teamMembersList = {};
let selectedTeam = '';


// Reset Function
const reset = () => {
  teamsElement.textContent = '';

};

// Display Teams Function
const displayTeams = (teams) =>{
    teams.forEach(team => {
        let article = document.createElement("article");

        let name = document.createElement("h2");
        name.textContent = team.teamName;


        let motive = document.createElement("p");
        motive.textContent = team.motive;


        let first = document.createElement("p");
        first.textContent = team.firstAppearance;

        let img = document.createElement("img");
        img.src = team.imgUrl;
        img.alt = team.teamName;

        article.appendChild(name);
        article.appendChild(motive);
        article.appendChild(first);
        article.appendChild(img);

        teamsElement.appendChild(article);
    });
};


// Display Team Member Function
const displayMembers = (members) =>{
  membersElement.textContent = '';

  members.forEach(member =>{
    let article = document.createElement("article");

    let name = document.createElement("h4");
    name.textContent = member.memberName;

    let abilities = document.createElement("ul");
    abilities.textContent = member.memberAbilities;

    let alterEgo = document.createElement("h4");
    alterEgo.textContent = member.alterEgo;

    let img = document.createElement("img");
    img.src = member.imgUrl;
    img.alt = team.memberName;

    article.appendChild(name);
    article.appendChild(alterEgo);
    article.appendChild(abilities);
    article.appendChild(img);

    membersElement.appendChild(article);

  });

};

// getTeams Function using Fetch
const getTeams = async () => {
  const response1 = await fetch("https://mholmes755.github.io/CSE121B/finalProject/theMarvelRoster.json");
  teamList = await response1.json();
  displayTeams(teamList);
}


// getTeamMembers Function using Fetch
  const getTeamMembers = async () => {
  const response2 = await fetch("https://mholmes755.github.io/CSE121B/finalProject/theMarvelRoster.json");
  teamMembersList = await response2.json();
  displayMembers(teamMembersList);
}



// Sorting the Teams Function
const sortTeamsBy = () =>{
  reset();
  const filter1 = document.getElementById('sortBy').value;
  switch (filter1)
  {
    case "theAvengers":
      // let avengerTeam = teamList.filter(team => team.teamName.includes("Avengers"));
      // displayTeams(avengerTeam);
      selectedTeam = "The Avengers";
      break;

    case "theGuardians":
      // let guardiansTeam = teamList.filter(team => team.teamName.includes("Guardians"));
      // displayTeams(guardiansTeam);
      selectedTeam = "The Guarduans of the Galaxy"
      break;

    case "sinisterSix":
      // let sinisterTeam = teamList.filter(team => team.teamName.includes("Sinister"));
      // displayTeams(sinisterTeam);
      selectedTeam = "The Sinister Six";
      break;

    case "mastersOfEvil":
      // let evilTeam = teamList.filter(team => team.teamName.includes("Evil"));
      // displayTeams(evilTeam);
      selectedTeam = "The Masters of Evil"
      break;

    case "all":
      // displayTeams(teamList);
      selectedTeam = "";
      break;


  }
};

// Sort the Team Members function
// const sortMembersBy = () =>{
//   const filter2 = document.getElementById('').value;

// }

// Selector Event Listener
document.querySelector("#sortBy").addEventListener("change", ()=> {sortTeamsBy(teamList)});


// Call main function
getTeams();
getTeamMembers();
