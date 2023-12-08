/* Declare and initialize global variabiles*/
const teamsElement = document.getElementById("teams");
let teamList = {};
let teamMembersList = {};


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
        console.log(article);
    });
};


// Display Team Member Function
// const displayMembers = (members) =>{
//   members.forEach(member =>{
//     let article = document.createElement("article");

//     let memberName = document.createElement("h4");
//     let memberName.textContent = member.name;
//   });

// };

// getTeams Function using Fetch
const getTeams = async () => {
  const response = await fetch("https://mholmes755.github.io/CSE121B/finalProject/theMarvelRoster.json");
  teamList = await response.json();
  displayTeams(teamList);
}

// getTeamMembers Function using Fetch
// const getTeamMembers = async () => {
//   const response = await fetch("https://mholmes755.github.io/CSE121B/finalProject/theMarvelRoster.json");
//   teamMembersList = await response.json();
//   displayMembers(teamMembersList);
// }

// Reset Function

const reset = () => {
  teamsElement.textContent = '';
};

// Sorting the Teams Function
const sortBy = () =>{

  reset();
  
  const filter = document.getElementById('sortBy').value.toLowerCase();
  switch (filter)
  {
    case "theAvengers":
      let avengerTeam = teamList.filter(team => team.teamName.toLowerCase().includes("Avengers"));
      displayTeams(avengerTeam);
      break;
    
    case "theGuardians":
      let guardiansTeam = teamList.filter(team => team.teamName.includes("Guardians"));
      displayTeams(guardiansTeam);
      break;

    case "sinisterSix":
      let sinisterTeam = teamList.filter(team => team.teamName.includes("Sinister"));
      displayTeams(sinisterTeam);
      break;

    case "mastersOfEvil":
      let evilTeam = teamList.filter(team => team.teamName.includes("Evil"));
      displayTeams(evilTeam);
      break;

    case "all":
      displayTeams(teamList);
      break;


  }
};




// Selector Event Listener
document.querySelector('#sortBy').addEventListener("change", ()=> {sortBy(teamList)});


// Team Event Listener


// Call main function
getTeams();

