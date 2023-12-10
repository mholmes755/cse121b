/* Declare and initialize global variabiles*/
const teamsElement = document.getElementById("teams");
let teamList = {};
const membersElement = document.getElementById("members");
let teamMembersList = {};
let memberFilter = [];

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
        img.src = team.teamImgUrl;
        img.alt = team.teamName;

        article.appendChild(name);
        article.appendChild(motive);
        article.appendChild(first);
        article.appendChild(img);

        teamsElement.appendChild(article);
    });
};


// Display Team Member Function
// const displayMembers = (members) =>{
//   membersElement.textContent = '';

//   members.forEach(member =>{
//     let article = document.createElement("article");

//     let name = document.createElement("h4");
//     name.textContent = member.memberName;

//     let abilities = document.createElement("p");
//     abilities.textContent = member.memberAbilities;

//     let alterEgo = document.createElement("h4");
//     alterEgo.textContent = member.alterEgo;

//     let img = document.createElement("img");
//     img.src = member.imgUrl;
//     img.alt = member.memberName;

//     article.appendChild(name);
//     article.appendChild(alterEgo)
//     article.appendChild(abilities);
//     article.appendChild(img);

//     membersElement.appendChild(article);

//   });

// };

// getTeams Function using Fetch
const getTeams = async () => {
  const response1 = await fetch("https://mholmes755.github.io/CSE121B/finalProject/teams.json")
  teamList = await response1.json();
  displayTeams(teamList);
};


// getTeamMembers Function using Fetch
  const getTeamMembers = async () => {
  const response2 = await fetch("https://mholmes755.github.io/CSE121B/finalProject/members.json")
  teamMembersList = await response2.json();
  displayMembers(teamMembersList);
};

// Reset Function
const reset = () => {
  teamsElement.textContent = '';
  membersElement.textContent = '';
  
};

// Sorting the Teams Function
const sortBy = () =>{
  reset();
  const filter = document.getElementById('sortBy').value;
  console.log("Selected Filter: ", filter);
  switch (filter)
  {
    case "theAvengers":
      // let avengerTeam = teamList.filter(team => team.teamName.includes('Avengers'));
      let avengerTeam = teamList.filter(team => team && team.teamName && team.teamName.includes("Avengers"));

      // memberFilter = teamMembersList.filter(member => member.teamAffiliation.includes("The Avengers"));
      displayTeams(avengerTeam);
      // displayMembers(memberFilter);
      break;

      
    case "theGuardians":
      // let guardiansTeam = teamList.filter(team => team.teamName.includes("Guardians"));
      let guardiansTeam = teamList.filter(team => team && team.teamName && team.teamName.includes("Guardians"));

      // memberFilter = teamMembersList.filter(member => member.teamAffiliation.includes("The Guardians of the Galaxy"));
      displayTeams(guardiansTeam);
      // displayMembers(memberFilter);
      break;

    case "sinisterSix":
      // let sinisterTeam = teamList.filter(team => team.teamName.includes("Sinister"));
      let sinisterTeam = teamList.filter(team => team && team.teamName && team.teamName.includes("Sinister"));

      // memberFilter = teamMembersList.filter(member => member.teamAffiliation.includes("The Sinister Six"));
      displayTeams(sinisterTeam);
      // displayMembers(memberFilter);
      break;

    case "mastersOfEvil":
      // let evilTeam = teamList.filter(team => team.teamName.includes("Evil"));
      let evilTeam = teamList.filter(team => team && team.teamName && team.teamName.includes("Evil"));

      // memberFilter = teamMembersList.filter(member => member.teamAffiliation.includes("The Masters of Evil"));
      displayTeams(evilTeam);
      // displayMembers(memberFilter);
      break;

    case "all":
      displayTeams(teamList);
      break;


  }
};



// Selector Event Listener
document.querySelector("#sortBy").addEventListener("change", ()=> {sortBy(teamList)});


// Call main function
getTeams();

