

// for(i = 0; i < names.length; i++){
//   console.log(names[i].innerText);
// }



let members = `[
  {
    "firstname": "Jeremiah",
    "lastname": "Jangad",
    "role": "Pastor",
    "date": "2013"
  },
  {
    "firstname": "Mary Joy",
    "lastname": "Jangad",
    "role": "Pastor\'s Wife",
    "date": "2013"
  },
  {
    "firstname": "Christopher",
    "lastname": "Ledesma",
    "role": "Member",
    "date": "2013"
  },
  {
    "firstname": "Lynda",
    "lastname": "Ledesma",
    "role": "Member",
    "date": "2013"
  },
{
    "firstname": "Jessie",
    "lastname": "Sisno",
    "role": "Member",
    "date": "2013"
  },
{
    "firstname": "Troy",
    "lastname": "Manalastas",
    "role": "Member",
    "date": "2013"
  },
{
    "firstname": "Vanessa",
    "lastname": "Manalastas",
    "role": "Member",
    "date": "2013"
  },
{
    "firstname": "Elizer",
    "lastname": "Laure",
    "role": "Member",
    "date": "2013"
  },
{
    "firstname": "Joenel",
    "lastname": "Afable",
    "role": "Member",
    "date": "2013"
  },
{
    "firstname": "Harry",
    "lastname": "Gonzales",
    "role": "Member",
    "date": "2014"
  },
{
    "firstname": "Helen",
    "lastname": "Sisno",
    "role": "Member",
    "date": "2014"
  },
{
    "firstname": "Jonathan",
    "lastname": "Ledesma",
    "role": "Member",
    "date": "2015"
  },
{
    "firstname": "Lorenzo",
    "lastname": "Tating Jr.",
    "role": "Preacher Member",
    "date": "2015"
  },
{
    "firstname": "Riza",
    "lastname": "Tating",
    "role": "Member",
    "date": "2015"
  },
{
    "firstname": "Jeff",
    "lastname": "Chavez",
    "role": "Preacher Member",
    "date": "2016"
  },
{
    "firstname": "Gloryben",
    "lastname": "Chavez",
    "role": "Member",
    "date": "2016"
  },
{
    "firstname": "Eliseo",
    "lastname": "Openio",
    "role": "Member",
    "date": "2016"
  },
{
    "firstname": "Elena",
    "lastname": "Openio",
    "role": "Member",
    "date": "2016"
  },
{
    "firstname": "Remy",
    "lastname": "Lagucay",
    "role": "Member",
    "date": "2016"
  },
{
    "firstname": "Henry",
    "lastname": "Sealongo",
    "role": "Member",
    "date": "2016"
  },
{
    "firstname": "Lorna",
    "lastname": "Sealongo",
    "role": "Member",
    "date": "2016"
  },
{
    "firstname": "Creziel",
    "lastname": "Mercado",
    "role": "Member",
    "date": "2016"
  },
{
    "firstname": "Ruby",
    "lastname": "Sarco",
    "role": "Member",
    "date": "2017"
  },
{
    "firstname": "Sam",
    "lastname": "Tacdoro",
    "role": "Member",
    "date": "2017"
  },
{
    "firstname": "Divine",
    "lastname": "Tacdoro",
    "role": "Member",
    "date": "2017"
  },
{
    "firstname": "Cristina",
    "lastname": "Olo",
    "role": "Member",
    "date": "2017"
  },
{
    "firstname": "Jordan",
    "lastname": "Ravanes",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Jerry",
    "lastname": "del Mundo",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Adora",
    "lastname": "del Mundo",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Esther Joi",
    "lastname": "del Mundo",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Joshua",
    "lastname": "Figueroa",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Jihan",
    "lastname": "Figueroa",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Mercy",
    "lastname": "Figueroa",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Dhon",
    "lastname": "Timblor",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Christian David",
    "lastname": "Bare",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Kate",
    "lastname": "Bare",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Psalm",
    "lastname": "Torres",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Christian Joriz",
    "lastname": "Fairbanks",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Genevieve",
    "lastname": "Carrillo",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Bar",
    "lastname": "Carrillo",
    "role": "Member",
    "date": "2018"
  },
{
    "firstname": "Isagani",
    "lastname": "Azur",
    "role": "Preacher Member",
    "date": "2019"
  },
{
    "firstname": "Christ John",
    "lastname": "Apinan",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Juni Gee",
    "lastname": "Apinan",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Ma. Jesus",
    "lastname": "Solidum",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Stephanie Anne",
    "lastname": "Solidum",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Sarah Allyssa",
    "lastname": "Solidum",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Christian",
    "lastname": "Francisco",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Shana",
    "lastname": "Francisco",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Geno Carlo A.",
    "lastname": "Miravalles",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Rochelle Veronica P.",
    "lastname": "Miravalles",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Ernest Jay",
    "lastname": "Brun",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Erniela Jam",
    "lastname": "Brun",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Maria Cecilla G.",
    "lastname": "Azur",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "John Charles",
    "lastname": "Lazaro",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "Jhoven",
    "lastname": "Asperin",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "David",
    "lastname": "Dawal",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "Randy",
    "lastname": "Marchadesch",
    "role": "Associate Member",
    "date": "2021"
  },
{
    "firstname": "Armel Jay",
    "lastname": "Mercado",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Peter",
    "lastname": "Zambrano",
    "role": "Member",
    "date": "2021"
  },
{
    "firstname": "Kristine",
    "lastname": "Duhaylungsod",
    "role": "Associate Member",
    "date": "September 2021"
  },
{
    "firstname": "Tim",
    "lastname": "Duhaylungsod",
    "role": "Associate Member",
    "date": "September 2021"
  },
{
    "firstname": "Flordeliz",
    "lastname": "Manila",
    "role": "Member",
    "date": "December 2021"
  },
{
    "firstname": "Angelica",
    "lastname": "Fernandez",
    "role": "Member",
    "date": "December 2021"
  },
{
    "firstname": "Cristine",
    "lastname": "Cance",
    "role": "Member",
    "date": "December 2021"
  },
{
    "firstname": "Ramon",
    "lastname": "Musngi",
    "role": "Member",
    "date": "December 2021"
  },
{
    "firstname": "Marissa",
    "lastname": "Musngi",
    "role": "Member",
    "date": "December 2021"
  },
{
    "firstname": "Aries Jake",
    "lastname": "Montilla",
    "role": "Member",
    "date": "December 2021"
  },
{
    "firstname": "Regina",
    "lastname": "Montilla",
    "role": "Member",
    "date": "December 2021"
  },
{
    "firstname": "Junariez",
    "lastname": "Musngi",
    "role": "Member",
    "date": "December 2021"
  },
  {
    "firstname": "Vince",
    "lastname": "Tombaga",
    "role": "Member",
    "date": " January 2022"
  }
]`

const membersNew = JSON.parse(members);
const total = membersNew.length;
const membersCard = document.getElementById("row");
const cancel = document.getElementById('clear-result');
const searchMembers = document.getElementById('searchButton');

const allMembersShow = () => {

  const memberList = membersNew.map(member => 
    ` <div class="col col_image">
    <div> <img class="member__image" src="/images/${member.firstname}.jpg"></div>
    <h2 class="main-members-name">${member.firstname} ${member.lastname}</h2>
    <p class="member-description">${member.role}</p>
    <p>Member since: ${member.date}</p>
  </div>`  
  )
  const showMembers = membersCard.innerHTML = memberList;
}

allMembersShow()

const showTotal = () => { 
  const myText = document.getElementById("showTotal");
  myText.innerText = total;
} 
showTotal()




const findMatches = (wordToMatch, names) => {
  return names.filter(name => {
    const regex = new RegExp(wordToMatch, 'gi');
    return name.firstname.match(regex) || name.lastname.match(regex) 
          || name.date.match(regex);
  })
}


const displayMatches = () => {
    const value = searchMembers.value;
    const matchArray = findMatches(value, membersNew);
    const showTotalResults = () => { 
      const myText = document.getElementById("showTotal");
      myText.innerText = matchArray.length;
    }
    showTotalResults()

    const html =  matchArray.map(member => 
      ` <div class="col col_image">
      <div> <img class="member__image" src="/images/${member.firstname}.jpg"></div>
      <h2 class="main-members-name">${member.firstname} ${member.lastname}</h2>
      <p class="member-description">${member.role}</p>
      <p>Member since: ${member.date}</p>
        </div>`  
    )
    const showMembers = document.getElementById("row").innerHTML = html;

    if (matchArray.length == 0) {
      document.getElementById("row").innerHTML = `<h2 class="results">No Results Found</h2>`;
      console.log('no results');
    } 

    return showMembers;
}


if (searchMembers.value !== "") {
  console.log('nothing here');
  cancel.classList.remove('.visible');
} 

searchMembers.addEventListener('change', displayMatches);
searchMembers.addEventListener('keyup', displayMatches);



const clearResult = () => {
  const clear = searchMembers.value = "";
  allMembersShow()
  return clear;
}

cancel.addEventListener('click', clearResult);
// searchYear.addEventListener('change', displayMatches(value2));






// console.log(membersNew[1])
// const ordered = membersNew.sort((a, b) => {
//   if(a.date > b.date) {
//     return 1;
//   } else {
//     return -1;
//   }
// })

// console.table(ordered);